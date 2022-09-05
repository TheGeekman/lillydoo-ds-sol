import { useDispatch, useSelector } from "react-redux";
import { productReducerType } from "../types";
import Header from "../components/UI/Header";
import SubscriptionComponent from "../components/UI/SubscriptionComponent";
import TeaserComponent from "../components/UI/TeaserComponent";
import Footer from "../components/UI/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { addProducts } from "../redux/slices/products";

type dataTypes = {
  data: productReducerType;
};

const Home = () => {
  const data = useSelector((state: dataTypes) => state.data.products);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const json = await axios.get("response.json");
      dispatch(addProducts(json.data));
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <main>
      <Header />
      <SubscriptionComponent />
      <TeaserComponent />
      <Footer />
    </main>
  );
};

export default Home;
