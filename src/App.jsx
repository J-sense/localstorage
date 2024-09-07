import { useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const data = { name, email, message };
    const newCart =[...user,data]
    setUser(newCart)
    console.log(user)

  };

  return (
    <div>
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-zinc-800 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        {
          user.map((singleUser,idx)=> console.log(singleUser))
        }
      </div>
    </div>
  );
}

export default App;
