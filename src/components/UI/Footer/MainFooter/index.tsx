import styles from "../../../../styles/components/MainFooter.module.scss";
import { images } from "../../../../utils/assets";

const MainFooter = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container--left"]}>
        <nav className={styles["navWrapper"]}>
          <h4>LILLYDOO</h4>
          <ul className={styles["navWrapper--list"]}>
            <li>Zahlung & Versand</li>
            <li>Hilfe</li>
            <li>Karriere</li>
            <li>Presse</li>
            <li>Hebammenprogramm</li>
            <li>Retail contact</li>
            <li>LILLYDOO App</li>
            <li>AGB</li>
            <li>Datenschutzerklärung</li>
            <li>Cookie Einstellungen</li>
            <li>Impressum</li>
          </ul>
        </nav>
      </div>
      <div className={styles["container--center"]}>
        <h4>Versandpartner</h4>
        <img src={images.dhlImg} />
      </div>
      <div className={styles["container--right"]}>
        <h4>Zahlungsarten</h4>
        <ul className={styles["imgList"]}>
          <li>
            <img src={images.visa} alt={"Visa logo"} />
          </li>
          <li>
            <img src={images.masterCard} alt={"masterCard logo"} />
          </li>
          <li>
            <img src={images.paypal} alt={"Paypal logo"} />
          </li>
          <li>
            <img src={images.rechnung} alt={"rechnung logo"} />
          </li>
          <li>
            <img src={images.sepa} alt={"sepa logo"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainFooter;
