import styles from "../../../../styles/components/SubscriptionComponent.module.scss";
import { images } from "../../../../utils/assets";
import Button from "../../Button";

type RightSideBarType = {
  handleProduct: (target: number) => void;
  productIndex: number;
  quantityPerPack: number;
  currentProductIndex: number;
  handleCurrentProduct: (target: string) => void;
  packageWeight: string;
  handleVariant: (target: number) => void;
  regularPrice: number;
  productVariant: number;
  discountedPrice: number;
  productMaxCount: number;
  handleSubscription: () => void;
  totalQuantity: number;
};
const RightSideBar = ({
  handleProduct,
  productIndex,
  quantityPerPack,
  currentProductIndex,
  handleCurrentProduct,
  packageWeight,
  productMaxCount,
  handleVariant,
  regularPrice,
  productVariant,
  discountedPrice,
  handleSubscription,
  totalQuantity,
}: RightSideBarType) => {
  return (
    <div className={styles["container--right"]}>
      <section id={"fitId"} className={styles["passform-container"]}>
        <p>Passform</p>
        <div className={styles["box-container"]}>
          <div
            onClick={() => handleProduct(0)}
            style={productIndex == 0 ? { borderColor: "#000000" } : {}}
            className={styles["box"]}
          >
            <img src={images.diaperIcon} />
            <span>Windeln</span>
          </div>
          <div
            onClick={() => handleProduct(1)}
            style={productIndex == 1 ? { borderColor: "#000000" } : {}}
            className={styles["box"]}
          >
            <img src={images.pantsIcon} />
            <span>Pants</span>
          </div>
        </div>
      </section>
      <section>
        <div className={styles["size-choose"]}>
          <div className={styles["size-choose__label"]}>
            <p>Größe</p>
            <p>{quantityPerPack} Windeln</p>
          </div>
          <div className={styles["size-choose__btn-wrapper"]}>
            <div
              style={
                currentProductIndex == 0
                  ? { borderColor: "#979797", cursor: "not-allowed" }
                  : {}
              }
              onClick={() => handleCurrentProduct("decr")}
              className={styles["count-btn"]}
            >
              -
            </div>
            <div className={styles["size-content"]}>
              <span>N° {currentProductIndex}</span>
              <p>{packageWeight} </p>
            </div>
            <div
              style={
                productMaxCount == currentProductIndex
                  ? { borderColor: "#979797", cursor: "not-allowed" }
                  : {}
              }
              onClick={() => handleCurrentProduct("incr")}
              className={styles["count-btn"]}
            >
              +
            </div>
          </div>
        </div>
      </section>
      <div id="diaperLine" className={styles["passform-container"]}>
        <p>Windellinie</p>
        <div className={styles["box-container"]}>
          <div
            onClick={() => handleVariant(0)}
            style={productVariant == 0 ? { borderColor: "#000000" } : {}}
            className={styles["box"]}
          >
            <img src={images.lillydooIcon} />
          </div>
          <div
            onClick={() => handleVariant(1)}
            style={productVariant == 1 ? { borderColor: "#000000" } : {}}
            className={styles["box"]}
          >
            <img src={images.lillydooGreenIcon} />
          </div>
        </div>
      </div>
      <div className={styles["mobile-only"]}>
        <ul className={styles["spec-list"]}>
          <li className={styles["spec-list__item"]}>
            <img src={images.tickIcon} />
            <span>{totalQuantity} Packungen, alle 4 Wochen</span>
          </li>
          <li className={styles["spec-list__item"]}>
            <img src={images.tickIcon} />
            <span>100% flexibel | jederzeit kündbar </span>
          </li>
        </ul>
      </div>
      <section className={styles["cart-container"]} style={{ marginTop: 50 }}>
        <div className={styles["price-wrapper"]}>
          <span className={styles["regular-price"]}>{regularPrice} €</span>
          <span className={styles["discounted-price"]}>
            {` ${discountedPrice} € `}
          </span>
          <span>{"(inkl. MwSt)"}</span>
        </div>
        <Button
          onClick={handleSubscription}
          customStyle={{ padding: "0.7rem 4.5rem" }}
          title="Jetzt Abo Bestellen"
        />
      </section>
      <section></section>
    </div>
  );
};

export default RightSideBar;
