import { useEffect, useState } from "react";

const UserForm = () => {
  // const [inputData, setInputData] = useState({
  //   name: "",
  //   email: "",
  //   gender: "",
  //   phone: "",
  // });
  // const handleForm = (e) => {
  //   e.preventDefault();

  // };
  const [inputData, setInputData] = useState({
    username: "",
    emailAddress: "",
    password: "",
    gender: "male",
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

    // You can access the form data in the `inputData` object.
    // Perform any validation or submission logic here.

    console.log("Form data:", inputData);
  };

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setInputData(parsedData);
    }
  }, []);

  return (
    <div>
      {/* <form onSubmit={handleForm}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      name="username"
                      id="username"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="password"
                    >
                      Phone Number
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200 ms-4 mt-10"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select name="gender" id="gender" required className="ms-4">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="female">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Save
                  </button>
                </div>
              </form> */}
      <form onSubmit={handleFormSubmit}>
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
      </form>
    </div>
  );
};

export default UserForm;
