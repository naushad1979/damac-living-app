import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button 
        type={props.type} 
        className={`${styles.button} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
      {props.children}
    </button>
  );
};

export default Button;
