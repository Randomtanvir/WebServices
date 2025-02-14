import { formatDate } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

export default function CardComponent({ item }) {
  return (
    <div className="w-80 shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <Image
        src={item?.coverPhoto}
        alt={item?.title}
        width={320}
        height={180}
        className="object-cover w-full hover:scale-105 transition-all h-48"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-500 text-sm mb-4">
          {formatDate(item.createdAt)}
        </p>

        <Link
          href={`/blogs/${item?.id}`}
          className="w-full text-indigo-600 flex justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
