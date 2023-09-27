import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.darkBG}>
        <dialogue className={styles.card} onClick={(e) => e.stopPropagation()}>
          <h2>Error</h2>
          <div>{props.errorMessage}</div>
          <button onClick={props.disable}>Dismiss</button>
        </dialogue>
      </div>
    </div>
  );
};

export default ErrorModal;
