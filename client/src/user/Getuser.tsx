import axios from "axios";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.map((user) => (
        <ul key={user.id}>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>
            {<img src={`http://localhost:5000/uploads/${user.img}`} />}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Getuser;
