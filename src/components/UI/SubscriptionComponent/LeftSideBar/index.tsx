import styles from "../../../../styles/components/SubscriptionComponent.module.scss";
import { images } from "../../../../utils/assets";

type LeftSideBarType = {
  totalQuantity: number;
  pricePerUnit: number;
  pricePerDiaper: string;
};

const LeftSideBar = ({
  totalQuantity,
  pricePerUnit,
  pricePerDiaper,
}: LeftSideBarType) => {
  return (
    <div className={styles["product-info-container"]}>
      <div className={styles["container-left-header"]}>
        <div>
          <img src={images.packshotImg} />
        </div>
        <p className={styles["description-product"]}>
          {
            "Du willst mehr Auswahlmöglichkeiten? Hier kommst du zu unserem Abo Konfigurator."
          }
        </p>
      </div>
      <hr />
      <ul className={styles["spec-list"]}>
        <li className={styles["spec-list__item"]}>
          <img src={images.tickIcon} />
          <span>{totalQuantity} Packungen, alle 4 Wochen</span>
        </li>
        <li className={styles["spec-list__item"]}>
          <img src={images.tickIcon} />
          <span>100% flexibel | jederzeit kündbar </span>
        </li>
        <li className={styles["spec-list__item"]}>
          <img src={images.tickIcon} />
          <span>Unsere hautfreundlichen Windeln</span>
        </li>
        <li className={styles["spec-list__item"]}>
          <img src={images.tickIcon} />
          <span>
            {pricePerUnit} €/ Packung (${pricePerDiaper} €/Windel)
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
