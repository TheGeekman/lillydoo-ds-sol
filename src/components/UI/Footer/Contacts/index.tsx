import { images } from "../../../../utils/assets";
import styles from "../../../../styles/components/Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container--info"]}>
        <p className={styles["container--info-text"]}>
          Wir wollen mehr für Dich sein, nicht nur Wickeln und Tschüss. Also ruf
          gerne an oder schreib uns!
        </p>
      </div>
      <div className={styles["container--contactInfo"]}>
        <div className={styles["mail-container"]}>
          <img src={images.mailIcon} alt="mail icon" />
          <div>service@lillydoo.com</div>
        </div>
        <div className={styles["phone-container"]}>
          <img src={images.phoneIcon} alt="phone icon" />
          <div>+41 (0) 43 - 508 11 45</div>
        </div>
        <div className={styles["social-container"]}>
          <img src={images.fbIcon} alt="fb icon" />
          <img src={images.instaIcon} alt="insta icon" />
          <img src={images.youtubeIcon} alt="youtube icon" />
          <img src={images.pinterestIcon} alt="pinterest icon" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
