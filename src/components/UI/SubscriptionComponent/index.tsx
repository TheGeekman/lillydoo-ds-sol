import { useState } from "react";
import styles from "../../../styles/components/SubscriptionComponent.module.scss";
import useSubscriptionData from "../../hooks/useSubscriptionData";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const SubscriptionComponent = () => {
  const [productIndex, setProductIndex] = useState(0); // 0 indicates diapers and 1 indicates pants
  const [productVariant, setProductVariant] = useState(0); // 0 indicates regular and 1 indicates green
  const [currentProductIndex, setCurrentProductIndex] = useState(0); // 0 indicates regular and 1 indicates green

  const [
    productMaxCount,
    packageWeight,
    quantityPerPack,
    regularPrice,
    discountedPrice,
    pricePerUnit,
    totalQuantity,
    pricePerDiaper,
  ] = useSubscriptionData(productIndex, productVariant, currentProductIndex);

  const handleProduct = (index: number) => {
    setProductIndex(index);
    setProductVariant(0);
    setCurrentProductIndex(0);
  };

  const handleVariant = (index: number) => {
    setProductVariant(index);
  };

  const handleCurrentProduct = (type: string) => {
    if (type == "decr") {
      setCurrentProductIndex((prev) => {
        let count = prev > 0 ? prev - 1 : prev;
        return count;
      });
    } else {
      setCurrentProductIndex((prev) => {
        let count = prev < productMaxCount ? prev + 1 : prev;
        return count;
      });
    }
    console.log(type);
  };

  const handleSubscription = () => {
    let msg = `Thanks, Subscription purchased successfully with below details:\n 
    Weight: ${packageWeight},
    Quantity Per Pack: ${quantityPerPack},
    Regular Price: ${regularPrice}€,
    Discounted Price: ${discountedPrice}€,
    Price Per Unit: ${pricePerUnit}€,
    Total Quantity: ${totalQuantity},
    Price Per Diaper: ${pricePerDiaper}€`;
    alert(msg);
  };

  return (
    <div data-testid="fastlaneId" className={styles["container"]}>
      <h2>4 Klicks zu Deinem Windel-Abo</h2>
      <div className={styles["configurator-container"]}>
        <LeftSideBar
          totalQuantity={totalQuantity}
          pricePerUnit={pricePerUnit}
          pricePerDiaper={pricePerDiaper}
        />
        <hr />
        <RightSideBar
          totalQuantity={totalQuantity}
          handleProduct={handleProduct}
          productIndex={productIndex}
          quantityPerPack={quantityPerPack}
          currentProductIndex={currentProductIndex}
          handleCurrentProduct={handleCurrentProduct}
          packageWeight={packageWeight}
          productMaxCount={productMaxCount}
          handleVariant={handleVariant}
          regularPrice={regularPrice}
          productVariant={productVariant}
          discountedPrice={discountedPrice}
          handleSubscription={handleSubscription}
        />
      </div>
    </div>
  );
};

export default SubscriptionComponent;
