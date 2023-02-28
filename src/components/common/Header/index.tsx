import styles from "./index.module.scss";

interface PropType {
  title: string;
}

const Header = ({ title }: PropType) => {
  return <h1 className={styles.header}>{title}</h1>;
};

export default Header;
