const Home = () => {
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
      <div className="text-start py-12">
        <div className="dropdown dropdown-right">
          <label tabIndex={0} className="btn m-1">
            React
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Counter</a>
            </li>
            <li>
              <a>Form</a>
            </li>
            <li>
              <a>List</a>
            </li>
          </ul>
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
