import { useLoaderData } from "react-router-dom";
import Nav from "./Nav";
import Swal from 'sweetalert2';


const UpdateUser = () => {

    const alluser = useLoaderData();

    const {_id , name ,age , yob , fathername,mothername} = alluser;

 

    const handleupdateuser = event => {
            event.preventDefault();
    
    
            const form = event.target;
            const name = form.name.value;
            const age = form.age.value;
            const yob = form.yob.value;
            const fathername = form.fathername.value;
            const mothername = form.mothername.value;
    
    
            const updateUser = {name,age,yob,fathername,mothername};
            console.log(updateUser);
    
            fetch(`https://user-managment-server-dusky.vercel.app/users/${_id}`,{
                method : "PUT",
                headers : {
                    "content-type" : "application/json",
                },
                body : JSON.stringify(updateUser)
            })
            .then(res => res.json())
            .then (data => {
                if (data.modifiedCount > 0){
                    Swal.fire({
                        title: "User Updated Successfully !!",
                        icon: "success"
                      });
                }
                else{
                    Swal.fire({
                        title: "Failed to Update User !!",
                        icon: "error"
                        
                      });
                }
            })
    
        }
    return (
        <div className="px-12 mt-4">
            <Nav></Nav>
            <div className="px-4 sm:px-8 md:px-12 py-6">
           
            <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Update  User</h2>
                <form onSubmit={handleupdateuser}
                    className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input
                         defaultValue={name}
                            name="name"
                            type="text"
                            placeholder="Enter name"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Age</label>
                        <input
                         defaultValue={age}
                            name="age"
                            type="number"
                            placeholder="Enter age"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Year of Birth</label>
                        <input
                         defaultValue={yob}
                            name="yob"
                            type="number"
                            placeholder="Enter year of birth"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Father's Name</label>
                        <input
                         defaultValue={fathername}
                            name="fathername"
                            type="text"
                            placeholder="Enter father's name"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Mother's Name</label>
                        <input
                         defaultValue={mothername}
                            name="mothername"
                            type="text"
                            placeholder="Enter mother's name"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
                    >
                        Add User
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateUser;