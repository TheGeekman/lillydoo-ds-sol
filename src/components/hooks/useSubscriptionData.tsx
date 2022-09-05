import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/components/SubscriptionComponent.module.scss";
import { productReducerType, subscriptionType } from "../../types";

type dataTypes = {
  data: productReducerType;
};

type useSubscriptionDataTypes = {
  productIndex: number;
  productVariant: number;
  currentProductIndex: number;
};

const useSubscriptionData = (
  productIndex: number,
  productVariant: number,
  currentProductIndex: number
): [number, string, number, number, number, number, number, string] => {
  const data = useSelector((state: dataTypes) => state.data.products);
  const {
    subscriptionProducts,
    pricePerSubscription,
  }: {
    subscriptionProducts: Array<subscriptionType>;
    pricePerSubscription: {};
  } = data;

  const productMaxCount =
    subscriptionProducts[productIndex]?.products.length - 1;

  const packageWeight =
    subscriptionProducts[productIndex]?.products[currentProductIndex].weight;

  const quantityPerPack =
    subscriptionProducts[productIndex]?.products[currentProductIndex]
      .quantityPerPack;

  const regularPrice =
    subscriptionProducts[productIndex]?.products[currentProductIndex].variants[
      productVariant
    ].pricePerProduct.regularPrice;

  const discountedPrice =
    subscriptionProducts[productIndex]?.products[currentProductIndex].variants[
      productVariant
    ].pricePerProduct.discountedPrice;

  const pricePerUnit =
    subscriptionProducts[productIndex]?.products[currentProductIndex].variants[
      productVariant
    ].pricePerProduct.pricePerUnit;

  const totalQuantity =
    subscriptionProducts[productIndex]?.products[currentProductIndex].quantity;

  const pricePerDiaper = (pricePerUnit / quantityPerPack).toFixed(2);

  return [
    productMaxCount,
    packageWeight,
    quantityPerPack,
    regularPrice,
    discountedPrice,
    pricePerUnit,
    totalQuantity,
    pricePerDiaper,
  ];
};

export default useSubscriptionData;
