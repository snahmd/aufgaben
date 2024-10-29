import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    cell: "",
    dob: "",
    city: "",
    picture: "",
  });
  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
    setUserData(data.results[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <img src={userData.picture.large} alt="#" />
      <p>Hi I'm</p>
      <p>{userData.name.first + " " + userData.name.last}</p>
      <h4>{userData.email}</h4>
      <h4>{userData.cell}</h4>
      <h4>{userData.dob.date}</h4>
      <h4>{userData.city}</h4>
      <button className="bg-yellow-300 text-slate-600 p-2" onClick={getUser}>
        new user
      </button>
    </div>
  );
};

export default User;
