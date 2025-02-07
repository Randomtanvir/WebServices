import { hotelModel } from "@/models/hotel-model";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInArrayReview,
  replaceMongoIdInObject,
  replaceMongoIdInObjectWithUserId,
} from "@/utils/data-mongo";
import connectMongo from "../dbConnect";
import { reviewModel } from "@/models/review-model";

export const getAllHotels = async (destination, perpage, page) => {
  try {
    const regex = new RegExp(destination, "i");
    await connectMongo();
    let hotelsByDestination;
    if (destination) {
      hotelsByDestination = await hotelModel
        .find({ name: { $regex: regex } })
        .lean();
    } else {
      hotelsByDestination = await hotelModel
        .find({ name: { $regex: regex } })
        .skip(perpage * (page - 1))
        .limit(perpage)
        .lean();
    }
    const itemCount = await hotelModel.countDocuments({});
    let allHotels = hotelsByDestination;

    // if (category) {
    //   const categoryToMatch = category.split("|");
    //   allHotels = allHotels.filter((hotel) =>
    //     categoryToMatch.includes(hotel?.propertyCategory.toString())
    //   );
    // }

    // if (checkin && checkout) {
    //   allHotels = await Promise.all(
    //     allHotels.map(async (hotel) => {
    //       const found = await findBooking(hotel._id, checkin, checkout);

    //       if (found) {
    //         hotel["isBooked"] = true;
    //       } else {
    //         hotel["isBooked"] = false;
    //       }
    //       return hotel;
    //     })
    //   );
    // }

    return { hotels: replaceMongoIdInArray(allHotels), itemCount: itemCount };
  } catch (error) {
    return { error: true, message: "get HOTEL error" };
  }
};
export const getHotelById = async (hotelId) => {
  try {
    await connectMongo();
    const hotel = await hotelModel.findById(hotelId).lean();
    return replaceMongoIdInObjectWithUserId(hotel);
  } catch (error) {
    return { error: true, message: "somthing went wrong" };
  }
};
export const getUserByEmail = async (email) => {
  try {
    await connectMongo();
    const users = await userModel.find({ email: email }).lean();
    return replaceMongoIdInObject(users[0]);
  } catch (error) {
    return { error: true, message: "somthing went wrong" };
  }
};
export const getAllReviews = async (hotelId) => {
  try {
    await connectMongo();
    const reviews = await reviewModel.find({ hotelId }).lean();
    return replaceMongoIdInArrayReview(reviews);
  } catch (error) {
    return { error: true, message: "review error" };
  }
};

export const getReviewById = async (id) => {
  try {
    await connectMongo();
    const review = await reviewModel.findById(id).lean();
    return JSON.stringify(review);
  } catch (error) {
    return { error: true, message: "somthing went wrong" };
  }
};

export const getHotelByUserId = async (userId) => {
  try {
    await connectMongo();
    const hotes = await hotelModel.find({ userId }).lean();
    return replaceMongoIdInArray(hotes);
  } catch (error) {
    return { error: true, message: "somthing went wrong" };
  }
};
