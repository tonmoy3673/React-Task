import { useState } from "react";

const Home = () => {
  const [isVisible, setVisible] = useState("counter");
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* ================= NavBar=================== */}
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Name: Mehedi Hasan Tonmoy
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Email: meheditonmoy917@gmail.com
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Address: Khilkhet,Dhaka-1229
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Phone: +8801966527486
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* ===================== side bar ====================== */}
      <div className="grid grid-cols-1 py-12">
        <div className="text-start">
          <div className="dropdown dropdown-right">
            <label tabIndex={0} className="btn m-1">
              React
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => setVisible("counter")}>Counter</button>
              </li>
              <li>
                <button onClick={() => setVisible("form")}>Form</button>
              </li>
              <li>
                <button onClick={() => setVisible("list")}>List</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-screen">
          {isVisible == "counter" && (
            <div>
              <h3> Counter : {count}</h3>
              <button onClick={() => setCount(count + 1)}>
                Increase Count
              </button>
              <button onClick={() => setCount(count - 1)}>
                Decrease Count
              </button>
            </div>
          )}
          {isVisible == "form" && (
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                User Status
              </h2>

              <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
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
                    <select name="gender" required className="ms-4">
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
              </form>
            </section>
          )}
          {isVisible == "list" && <h2>List</h2>}
        </div>
      </div>
      {/* ============== Footer =================== */}
      <footer className="footer p-10 bg-base-200 text-center">
        <nav className="mx-auto">
          <header className="footer-title">University</header>
          <p>Branding</p>
        </nav>
        <nav>
          <header className="footer-title">Subject</header>
          <p>Computer Science Engineering</p>
        </nav>
        <nav>
          <header className="footer-title">Passing Year</header>
          <p>2023</p>
        </nav>
      </footer>

      {/* ============== end of homePage =========== */}
    </div>
  );
};

export default Home;
