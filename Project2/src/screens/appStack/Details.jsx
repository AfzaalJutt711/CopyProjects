import React, { useEffect, useReducer } from 'react';
import { View, Image, Text, ScrollView, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../store/products-slice';

const Details = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch()
  const { productDetails, isLoading } = useSelector(state => state.shop)

  useEffect(() => {
    dispatch(fetchProductDetails(product?._id))
  }, [])


  if (isLoading) return <View><Text>Loading...</Text></View>

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: productDetails?.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{productDetails?.title}</Text>
        <Text style={styles.brand}>Brand: {productDetails?.brand}</Text>
        <Text style={styles.category}>Category: {productDetails?.category}</Text>
        <Text style={styles.description}>{productDetails?.description}</Text>
        <Text style={styles.price}>Price: ${productDetails?.price.toFixed(2)}</Text>
      </View>
      <Button title="Add to Cart" style={styles.button} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  details: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  brand: {
    marginTop: 10,
  },
  category: {
    marginTop: 5,
  },
  description: {
    marginTop: 10,
  },
  price: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
});


export default Details;