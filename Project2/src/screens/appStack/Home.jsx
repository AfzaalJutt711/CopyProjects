import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFilteredProducts } from '../../store/products-slice'
import Card from '../../components/ProductCard'

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const { isLoading, productList } = useSelector(state => state.shop)

    useEffect(() => {
        dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: 'price-lowtohigh' }))
    }, [dispatch])

    if (isLoading) return <View><Text>Loading...</Text></View>
    return (
        <View style={styles.container}>
            <FlatList
                data={productList}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (

                    <Card product={item} />

                )}
                showsVerticalScrollIndicator={false}

            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
})
