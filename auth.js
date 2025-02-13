import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./models/user-model";
import mongoClientPromise from "./db/mongoClientPromise";
import connectMongo from "./db/dbConnect";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await connectMongo();
        if (credentials === null) return null;

        try {
          const user = await User.findOne({ email: credentials.email });
          console.log(user);
          if (user.role === "admin") {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return { id: user.id, email: user.email, role: user.role };
            }
          }
          if (user.role === "user") {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              return { id: user.id, email: user.email, role: user.role };
            } else {
              //   return { error: true, message: "Email or password mismatch" };
              throw new Error("Email or password mismatch");
            }
          } else {
            // return { error: true, message: "User not found" };
            throw new Error("User not found");
          }
        } catch (error) {
          console.log(error);
          //   return { error: true, message: "Emael invalid" };
          throw new Error(error.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectMongo(); // Ensure DB connection
      const dbUser = await User.findOne({ email: session.user.email }); // Fetch full user data
      // console.log(dbUser);
      // console.log(dbUser.username);
      // console.log(dbUser.role);
      if (dbUser) {
        session.user.id = dbUser._id.toString();
        session.user.role = dbUser.role;
        session.user.name = dbUser.username || dbUser.name;
        session.user.image = dbUser.image;
      }

      return session;
    },
  },
});
