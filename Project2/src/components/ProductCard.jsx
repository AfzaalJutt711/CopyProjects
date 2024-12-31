import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ product, isLoading }) => {
  const navigation = useNavigation()



  return (

    <Pressable
      onPress={() => {
        navigation.navigate('Details', {
          product: product
        })
      }}
    >
      <View style={styles.cardContainer} >
        <Image source={{ uri: product?.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{product?.title}</Text>
          <Text style={styles.cardBrand}>Brand: {product?.brand}</Text>
          <Text style={styles.cardCategory}>Category: {product?.category}</Text>
          <Text style={styles.cardPrice}>
            {product?.salePrice ? (
              <>
                <Text style={styles.cardStrikethroughPrice}>{product?.price}</Text>
                <Text style={styles.cardSalePrice}>${product?.salePrice}</Text>
              </>
            ) : (
              <>${product?.price}</>
            )}
          </Text>
        </View>
      </View>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
    padding: 15,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardContent: {
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBrand: {
    fontSize: 14,
    color: '#888',
  },
  cardCategory: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardStrikethroughPrice: {
    textDecorationLine: 'line-through',
    color: '#ccc',
    marginRight: 5,
  },
  cardSalePrice: {
    color: 'green',
  },
});

export default Card;