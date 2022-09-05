import styles from "../../../../styles/components/FooterBottom.module.scss";
import { images } from "../../../../utils/assets";

const FooterBottom = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["copyright-text-wrapper"]}>
        <p>© 2020 LILLYDOO GmbH</p>
      </div>
      <div className={styles["logo-container"]}>
        <ul className={styles["logo-container--list"]}>
          <li>
            <img src={images.trustedShopsBadge} alt="" />
          </li>
          <li>
            <img src={images.safePayment} alt="" />
          </li>
          <li>
            <img src={images.reddotBadge} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
