import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsUsersLoading(true);
    const displayUser = async () => {
      try {
        const url = "https://randomuser.me/api/?results=20";
        const res = await fetch(url);
        const data = await res.json();
        if (data?.results?.length > 0) {
          setUsers(data.results);
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
    return <p> Loading ... </p>;
  }
  if (isError) {
    return <p> Somethings Went Wrong!! </p>;
  }
  return (
    <div>
      <div>
        <h2> User List </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users?.slice(0, 10).map((user, index) => (
              <>
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
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
