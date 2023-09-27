import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.userData.map((e) => {
        return (
          <div className={styles.userCard}>
            {e.username} ({e.age} Years old)
          </div>
        );
      })}
    </div>
  );
};

export default Users;
