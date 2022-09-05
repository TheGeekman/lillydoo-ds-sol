import styles from "../../../styles/components/Button.module.scss";

type ButtonProps = {
  title?: string;
  customStyle?: any;
  onClick?: () => void;
};
const Button = ({
  title = "Discover Now",
  customStyle = {},
  onClick,
}: ButtonProps) => {
  return (
    <a
      data-testid="btnId"
      onClick={onClick}
      style={customStyle}
      className={styles["btn-container"]}
    >
      {title}
    </a>
  );
};

export default Button;
