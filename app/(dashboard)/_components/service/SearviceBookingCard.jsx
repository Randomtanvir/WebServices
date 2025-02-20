"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SearviceBookingCard = ({ bookingLists }) => {
  const router = useRouter();
  const handelDelete = async (id) => {
    if (confirm("Are you Sure?")) {
      const res = await fetch(`/api/service/booking-list/remove/${id}`, {
        method: "DELETE",
      });
      const response = await res.json();
      if (response.success) {
        router.refresh();
        toast.success(response.message);
      } else {
        console.error("Failed to delete blog.");
      }
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
      {bookingLists?.map((user) => (
        <div
          key={user._id}
          className="bg-white shadow-md rounded-lg p-4 border"
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {user.fullName}
            </h2>
            <button
              onClick={() => handelDelete(user?._id)}
              className="text-red-500 text-xs underline cursor-pointer"
            >
              Remove
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            {user.serviceType.toUpperCase()}
          </p>
          <p className="text-gray-700 mt-2">{user.aboutMe}</p>
          <div className="mt-3 text-sm text-gray-600">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>WebLink:</strong> {user.webLink || "I have no website"}
            </p>
            <p>
              <strong>Contact:</strong> {user.contact}
            </p>
            <p>
              <strong>Address:</strong> {user.address}, {user.city},{" "}
              {user.country} - {user.postalCode}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearviceBookingCard;
