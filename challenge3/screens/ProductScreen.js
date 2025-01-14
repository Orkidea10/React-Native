import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import Products from "../data/products.json";

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    this.setState({ productList: Products });
  }

  renderProduct = ({ item }) => {
    const imageMap = {
      "images/ipad.webp": require("./images/ipad.webp"),
      "images/basketball.webp": require("./images/basketball.webp"),
      "images/samsung.jpg": require("./images/samsung.jpg"),
      "images/dyson.jpg": require("./images/dyson.jpg"),
      "images/jordan.webp": require("./images/jordan.webp"),
      "images/lamp.webp": require("./images/lamp.webp"),
      "images/cerave.jpg": require("./images/cerave.jpg"),
      "images/saltLamp.jpg": require("./images/saltLamp.jpg"),
    };

    return (
      <View style={styles.productCard}>
        <Image source={imageMap[item.image]} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  render() {
    const { productList } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={productList}
          renderItem={this.renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginVertical: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#28a745",
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: "#6c757d",
  },
});
