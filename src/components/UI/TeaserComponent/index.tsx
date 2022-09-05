import styles from "../../../styles/components/TeaserComponent.module.scss";
import { images } from "../../../utils/assets";
import Button from "../Button";

const TeaserComponent = () => {
  return (
    <section className={styles["teaser-wrapper"]}>
      <div className={styles["container"]}>
        <div className={styles["container--teaser-content"]}>
          <div className={styles["container--teaser-content--heading"]}>
            <h2>Noch nicht überzeugt?</h2>
            <h3>Jetzt gratis testen</h3>
          </div>
          <div>
            <ul className={styles["feature-list"]}>
              <li>
                <img src={images.tickIcon} />
                10 hautfreundliche Windeln & 15 Feuchttücher
              </li>
              <li>
                <img src={images.tickIcon} />
                Wir zahlen die Produkte, Du nur den Versand
              </li>
              <li>
                <img src={images.tickIcon} />
                Hole Dir die Versandkosten zurück und erhalte 3,90 €
              </li>
              <li>
                <img src={images.tickIcon} />
                Rabatt auf Deine erste Abo-Box.
              </li>
            </ul>
          </div>
          <div className={styles["btn-wrapper"]}>
            <Button />
          </div>
        </div>
        <div className={styles["container--teaser-img"]}>
          <img src={images.trialpackTeaserImg} alt={"trial pack"} />
        </div>
      </div>
    </section>
  );
};

export default TeaserComponent;
