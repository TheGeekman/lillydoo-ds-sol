import styles from "../../../../styles/components/MainHeader.module.scss";
import { images } from "../../../../utils/assets";

const MainHeader = () => {
  return (
    <div className={styles["container"]}>
      <nav className={styles["container--nav"]}>
        <img
          className={styles["mobile-only"]}
          src={images.hamburgerIcon}
          alt={"Toggle icon"}
        />
        <div className={styles["logo-container"]}>
          <a>
            <img src={images.LILLYDOO_Logo} alt="LillyDoo Logo" />
          </a>
        </div>
        <img
          className={styles["mobile-only"]}
          src={images.cartIcon}
          alt={"cart icon"}
        />
        <section className={styles["container--section"]}>
          <ul className={styles["container--list"]}>
            <li>GRATIS TESTPAKET</li>
            <li>FLEXIBLES ABO</li>
            <li className={styles["container--list-product"]}>Produkte</li>
            <li>Magazin</li>
            <li>Über Lillydoo</li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default MainHeader;
