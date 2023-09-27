import { useState, useEffect, useRef } from "react";
import styles from "./AddUserForm.module.css";
import ErrorModal from "./ErrorModal";

const AddUserForm = (props) => {
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error Message");
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  // let modalRef = useRef();

  // useEffect(() => {
  //   let handler = (event) => {
  //     console.log(event);
  //     if (!modalRef.current.contains(event.target)) {
  //       console.log("Clicked");
  //       setErrorModal(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     console.log("Returning");
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((userInput) => ({
      ...userInput,
      [name]: value,
    }));
  };

  let invalidAge = "Please enter a valid age that is > 0.";
  let invalidInput = "Please fill both input fields.";

  const formHandleSubmit = (e) => {
    e.preventDefault();
    if (userInput.username == "" || userInput.age == "") {
      setErrorMessage(invalidInput);
      setErrorModal(true);
    } else if (userInput.age <= 0) {
      setErrorMessage(invalidAge);
      setErrorModal(true);
    } else {
      props.passUpUserData(userInput);
      console.log(userInput);
      setUserInput({ username: "", age: "" });
    }
  };

  const disableErrorModal = () => {
    setErrorModal(false);
  };

  return (
    <div onClick={disableErrorModal} className={styles.card}>
      {errorModal && (
        <ErrorModal
          // ref={modalRef}
          disable={disableErrorModal}
          errorMessage={errorMessage}
        />
      )}
      <form onSubmit={formHandleSubmit} className={styles.form}>
        <div>
          <div>
            <label className={styles.label}>Username:</label>
          </div>
          <input
            className={styles.inputDiv}
            type="text"
            name="username"
            value={userInput.username}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <div className={styles.label}>
            <label>Age (Years)</label>
          </div>
          <input
            className={styles.inputDiv}
            type="number"
            name="age"
            value={userInput.age}
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
