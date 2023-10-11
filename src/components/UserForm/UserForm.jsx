import { useState } from "react";

const UserForm = () => {
  const [inputData, setInputData] = useState({
    username: "",
    emailAddress: "",
    phone: "",
    gender: "",
  });

  const updateFormData = (newData) => {
    setInputData(newData);
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...inputData, [name]: value };
    updateFormData(newFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", inputData);
    setInputData({
      username: "",
      emailAddress: "",
      phone: "",
      gender: "",
    });
  };

  return (
    <div className="mt-12">
      <>
        <form onSubmit={handleFormSubmit}>
          <div className="relative z-0 w-full mb-10 group">
            <input
              name="username"
              id="username"
              type="text"
              value={inputData.username}
              onChange={handleFormChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-10 group">
              <input
                name="emailAddress"
                id="emailAddress"
                type="email"
                value={inputData.emailAddress}
                onChange={handleFormChange}
                className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{11}"
                name="phone"
                id="phone"
                value={inputData.phone}
                onChange={handleFormChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (01966527486)
              </label>
            </div>

            <div>
              {/* <label htmlFor="gender">Gender</label> */}
              <select
                name="gender"
                id="gender"
                value={inputData.gender}
                onChange={handleFormChange}
                required
                className="w-full text-center border-b-2 mt-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </>
      {/* <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              value={inputData.username}
              onChange={handleFormChange}
              required
            />
          </div>

          <div>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              name="emailAddress"
              id="emailAddress"
              type="email"
              value={inputData.emailAddress}
              onChange={handleFormChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Phone Number</label>
            <input
              name="password"
              id="password"
              type="text"
              value={inputData.password}
              onChange={handleFormChange}
              required
            />
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={inputData.gender}
              onChange={handleFormChange}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button type="submit">Save</button>
        </div>
      </form> */}
    </div>
  );
};

export default UserForm;
