import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { checkAuth } from '../store/auth-slice';


const Router = () => {
  const { isAuthenticated, isLoading, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
    .then((data)=>{
      console.log(data.payload.success);
      
    })
  }, [])


  if (isLoading) return <View><Text>Checking Authentication...</Text></View>

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({})