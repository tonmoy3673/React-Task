import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchItem, setSearchItem] = useState("");
  const lastIndex = page * 10;
  const firstIndex = lastIndex - 10;
  const currentIndex = filteredUsers.slice(firstIndex, lastIndex);

  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };

  const sortData = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      console.log(key);
      if (key === "name.first" || key === "name.last") {
        const nameA = key === "name.first" ? a.name.first : a.name.last;
        const nameB = key === "name.first" ? b.name.first : b.name.last;

        if (sortOrder === "asc") {
          return nameA < nameB ? -1 : 1;
        } else {
          return nameA > nameB ? -1 : 1;
        }
      } else {
        if (sortOrder === "asc") {
          return a[key] < b[key] ? -1 : 1;
        } else {
          return a[key] > b[key] ? -1 : 1;
        }
      }
    });

    setFilteredUsers(sortedUsers);
  };

  const handleSearchButton = (event) => {
    const searchItem = event.target.value.toLowerCase();
    setSearchItem(searchItem);

    const filteredUsers = users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(searchItem) ||
        user.name.last.toLowerCase().includes(searchItem) ||
        user.email.toLowerCase().includes(searchItem) ||
        user.gender.toLowerCase().includes(searchItem)
      );
    });

    setFilteredUsers(filteredUsers);
    setPage(1);
  };

  useEffect(() => {
    setIsUsersLoading(true);
    const displayUser = async () => {
      try {
        const url = "https://randomuser.me/api/?results=20";
        const res = await fetch(url);
        const data = await res.json();
        if (data?.results?.length > 0) {
          setUsers(data.results);
          setFilteredUsers(data.results);
        }
      } catch (error) {
        if (error) {
          setIsError(true);
        }
      } finally {
        setIsUsersLoading(false);
      }
    };

    displayUser();
  }, []);

  if (isUsersLoading) {
    return <p>Loading ...</p>;
  }
  if (isError) {
    return <p>Something Went Wrong!!</p>;
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          User List Table
        </h2>
        <div>
          <div className="mb-3 flex justify-end">
            <div className="mb-4 flex w-4/12 flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                value={searchItem}
                onChange={handleSearchButton}
              />

              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-md">
              <th></th>
              <th onClick={() => sortData("name.first")}>Name</th>
              <th onClick={() => sortData("email")}>Email</th>
              <th onClick={() => sortData("gender")}>Gender</th>
              <th onClick={() => sortData("phone")}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {currentIndex?.map((user, index) => (
              <tr key={index + 1}>
                <th>{index + 1}</th>
                <td>
                  {user?.name?.title +
                    " " +
                    user?.name?.first +
                    " " +
                    user?.name?.last}
                </td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        {Array.from({ length: Math.ceil(filteredUsers.length / 10) }).map(
          (_, index) => (
            <button
              className={`btn btn-xs mx-2 ${
                page === index + 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => pagination(index + 1)}
              key={index}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default UserList;
``;
