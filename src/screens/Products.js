import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { fetchAPI } from "../api/api";
import Loading from "./Loading";

const Products = ({ navigation }) => {
  const [DATA, setData] = useState();

  useEffect(() => {
    const response = async () => {
      setData(await fetchAPI());
    };
    response();
  }, [DATA]);

  if (!DATA) {
    return <Loading />;
  }
  const Item = ({ title, image, category, price }) => (
    <TouchableOpacity style={style.data}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={style.posts}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            image: image,
            title: title,
            price: price,
          });
        }}
      >
        <Text numberOfLines={2} style={style.title}>
          {title}
        </Text>
        <Image style={style.image} source={{ uri: image }} resizeMode="cover" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} price={item.price} />
  );
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Products;

const style = StyleSheet.create({
  data: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
  },
  posts: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 2,
    // borderRadius: 20,
    // height: 350,
    // backgroundColor: "white",
    // padding: 5,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    width: "50%",
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "50%",
  },
  category: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    alignSelf: "flex-end",
  },
});
