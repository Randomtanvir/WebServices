import Image from "next/image";

const BlogCard = ({ id, title, content, coverPhoto }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {coverPhoto && (
        <Image
          src={coverPhoto}
          alt={title}
          width={400}
          height={250}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{content.substring(0, 100)}...</p>
      </div>
    </div>
  );
};

export default BlogCard;
