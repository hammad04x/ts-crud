import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddData() {
  const navigate=useNavigate()
  const [name, setName] = useState<string>("");

  const [img, setImg] = useState<File | undefined>(undefined);


 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!img) return;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("img", img);

      await axios.post("http://localhost:5000/adduser",formData);

      alert("DATA ADDED");

      setName("");
      setImg(undefined);
      navigate("/")
    } catch (error) {
      console.error(error);
      alert("ERROR TO ADD DATA");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="img">Image</label>
          <input
            id="img"
            type="file"
            accept="image/*"
            required
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) => {
              const file = e.target.files?.[0];
              if (!file) return;
              setImg(file);
            }}
          />
        </div>

        <button type="submit">ADD DATA</button>
      </form>
    </div>
  );
}

export default AddData;
