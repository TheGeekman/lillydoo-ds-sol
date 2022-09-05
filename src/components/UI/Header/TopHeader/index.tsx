import styles from "../../../../styles/components/TopHeader.module.scss";
import { images } from "../../../../utils/assets";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles["container--left"]}>
        <div className={styles["container--left--img-1"]}>
          <img src={images.lillydooLogoWhite} alt="lillydoo" />
        </div>
        <div className={styles["container--left--img-2"]}>
          <img src={images.vivoyLogoWhite} alt="vivoy" />
        </div>
      </div>
      <nav className={styles["container--meta-nav"]}>
        <ul className={styles["container--list"]}>
          <li className="container__listItem">DE</li>
          <li className="container__listItem">Hilfe</li>
          <li className="container__listItem">Login</li>
          <li className={styles["container--list-last"]}>
            <img src={images.whitecartIcon} alt="cart icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopHeader;
