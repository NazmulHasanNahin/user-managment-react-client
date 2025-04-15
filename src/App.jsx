import { Link, useLoaderData } from "react-router-dom";
import Nav from "./components/Nav";
import Swal from "sweetalert2";
import { Eye, Pencil, Trash2 } from "lucide-react";

function App() {
  const users = useLoaderData();

  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://user-managment-server-dusky.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success").then(() =>
                window.location.reload()
              );
            } else {
              Swal.fire("Error!", "Failed to delete user.", "error");
            }
          });
      }
    });
  };

  return (
    <div className="px-4 sm:px-12 mt-4">
      <Nav />
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        User List
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map(({ _id, name, age, yob, fathername, mothername }) => (
          <div
            key={_id}
            className="bg-white rounded-2xl shadow-md p-6 space-y-4 transition duration-200 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>

            <div className="text-gray-700 text-sm space-y-1">
              <p><span className="font-medium">Age:</span> {age}</p>
              <p><span className="font-medium">Year of Birth:</span> {yob}</p>
              <p><span className="font-medium">Father's Name:</span> {fathername}</p>
              <p><span className="font-medium">Mother's Name:</span> {mothername}</p>
            </div>

            <div className="flex gap-2 pt-4 flex-wrap">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2">
                <Eye size={18} /> View
              </button>
              <Link
                to={`/updateuser/${_id}`}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-xl flex items-center justify-center gap-2"
              >
                <Pencil size={18} /> Edit
              </Link>
              <button
                onClick={() => handleDeleteUser(_id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2"
              >
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
