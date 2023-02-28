import styles from "./index.module.scss";

interface PropType {
  children: string;
  selector?: string;
  onClick: () => void;
}

const Button = ({ children, selector = "basic", onClick }: PropType) => {
  return (
    <div className={styles[selector]} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
