import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFilteredProducts } from '../../store/products-slice'
import Card from '../../components/ProductCard'

const Shop = ({ navigation }) => {
    const dispatch = useDispatch()
    const { productList } = useSelector(state => state.shop)
    const isLoading = true

    useEffect(() => {
        dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: 'price-lowtohigh' }))
    }, [dispatch])

    return (
        <View style={styles.container}>
            <FlatList
                data={productList}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (

                    <Card product={item} isLoading={isLoading} />

                )}
                showsVerticalScrollIndicator={false}

            />
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
})
