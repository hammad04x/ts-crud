import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type User = {
  id: number;
  name: string;
  img: string | null;
};

function Getuser() {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get<User[]>("http://localhost:5000/getuser");
      setData(res.data);
    } catch (err) {
      setError("Failed to load users");
    }
  };

  const deleteUser = async (userId: number) => {
    try {
      await axios.delete<User[]>(`http://localhost:5000/deleteuser/${userId}`)
      alert("DELETED")
      fetchData()
    } catch (error) {
      alert("FAILED TO DELETE")
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <>
        <NavLink to={"/AddData"}>
          <button>Add User</button>
        </NavLink>
      </>
      <>
        <table>
          <thead>
            <tr style={{ display: "flex", gap: "10px", }}>
              <th>Id</th>
              <th>Name</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  {<img src={`http://localhost:5000/upload/${user.img}`} width={"80px"} />}
                </td>
                <td>
                  <NavLink to={`/EditUser/${user.id}`}>
                    <button>Edit</button>
                  </NavLink>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default Getuser;
