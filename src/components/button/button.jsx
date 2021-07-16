import "./button.css";

const Button = (props) => {
  const { textContent, type, isPrimary, tertiary } = props;

  return (
    <button className={`button ${isPrimary ? "button__primary" : "button__secondary"} ${tertiary ? "button__tertiary" : null}`} type={type}>
      {textContent}
    </button>
  );
};

export default Button;
