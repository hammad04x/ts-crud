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

  const deleteUser=async(userId:number)=>{
    try {
      await axios.delete<User[]>(`http://localhost:5000/deleteuser/${userId}`)
      alert("HEHEHEHe")
    } catch (error) {
      alert("LOLOLOLOLO")
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
        {data.map((user) => (
          <ul key={user.id}>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>
              {<img src={`http://localhost:5000/upload/${user.img}`} width={"80px"} />}
            </li>
            <li>
              <NavLink to={`/EditUser/${user.id}`}>
              <button>Edit</button>
              </NavLink>
            </li>
            <li>
              <button onClick={()=> deleteUser(user.id)}>Delete</button>
            </li>
          </ul>
        ))}
      </>
    </div>
  );
}

export default Getuser;
