import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/addUserForm";
import Users from "./components/Users";

const App = () => {
  const [userData, setUserData] = useState([]);

  const retrieveUsers = (data) => {
    console.log(data);
    setUserData((userData) => {
      return [...userData, data];
    });
  };

  console.log(userData);

  return (
    <>
      <AddUserForm passUpUserData={retrieveUsers} />
      <Users userData={userData} />
    </>
  );
};

export default App;
