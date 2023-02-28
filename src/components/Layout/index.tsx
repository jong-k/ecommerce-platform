import styles from "./index.module.scss";
import Header from "../common/Header";

interface PropType {
  children: JSX.Element;
}

const Layout = ({ children }: PropType) => {
  return (
    <div className={styles.layout}>
      <Header title="Issue Tracker" />
      {children}
    </div>
  );
};
export default Layout;
