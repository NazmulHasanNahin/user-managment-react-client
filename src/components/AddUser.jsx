import Nav from "./Nav";
import Swal from 'sweetalert2';
const AddUser = () => {

    const handleadduser = event => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const age = form.age.value;
        const yob = form.yob.value;
        const fathername = form.fathername.value;
        const mothername = form.mothername.value;


        const newUser = {name,age,yob,fathername,mothername};
        console.log(newUser);

        fetch("https://user-managment-server-dusky.vercel.app/users",{
            method : "POST",
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then (data => {
            if (data){
                Swal.fire({
                    title: "User Added Successfully !!",
                    icon: "success"
                  });
            }
            else{
                Swal.fire({
                    title: "Failed to Add User !!",
                    icon: "error"
                    
                  });
            }
        })

    }

    return (
        <div className="px-4 sm:px-8 md:px-12 py-6">
            <Nav />
            <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Add New User</h2>
                <form onSubmit={handleadduser}
                    className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter name"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Age</label>
                        <input
                            name="age"
                            type="number"
                            placeholder="Enter age"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Year of Birth</label>
                        <input
                            name="yob"
                            type="number"
                            placeholder="Enter year of birth"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Father's Name</label>
                        <input
                            name="fathername"
                            type="text"
                            placeholder="Enter father's name"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">Mother's Name</label>
                        <input
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
    );
};

export default AddUser;
