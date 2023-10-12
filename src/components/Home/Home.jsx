import { useState } from "react";
import UserForm from "../UserForm/UserForm";
import UserList from "../UserList/UserList";
import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isVisible, setVisible] = useState("counter");

  return (
    <div>
      {/* ================= NavBar=================== */}
      <header className="p-8 mx-auto w-full dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-center h-16 mx-auto">
          <ul className="items-stretch  hidden space-x-3 lg:flex">
            <li className="flex">
              <h4 className="flex items-center px-4 -mb-1 text-stone-700	font-semibold">
                Name: Mehedi Hasan Tonmoy
              </h4>
            </li>
            <li className="flex">
              <h4 className="flex items-center px-4 -mb-1 text-stone-700	font-semibold">
                Email: meheditonmoy917@gmail.com
              </h4>
            </li>
            <li className="flex">
              <h4 className="flex items-center px-4 -mb-1 text-stone-700	font-semibold">
                Address: Khilkhet,Dhaka-1229
              </h4>
            </li>
            <li className="flex">
              <h4 className="flex items-center px-4 -mb-1 text-stone-700	font-semibold">
                Phone: +8801966527486
              </h4>
            </li>
          </ul>
        </div>
      </header>

      {/* ===================== side bar ====================== */}
      <div className="grid grid-cols-1 py-12 px-12">
        <div className="text-start">
          <div className="dropdown dropdown-right ">
            <label
              tabIndex={0}
              className="btn m-1 bg-primary text-white hover:bg-primary"
            >
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
            // =========== Counter ==========//
            <div>
              <Counter />
            </div>
          )}
          {isVisible == "form" && (
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
              <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                User Registration
              </h2>
              {/* =========== User Form =========== */}
              <UserForm />
            </section>
          )}
          {isVisible == "list" && (
            <div>
              <UserList />
            </div>
          )}
        </div>
      </div>
      {/* ============== Footer =================== */}
      <Footer />
      {/* ============== end of homePage =========== */}
    </div>
  );
};

export default Home;
