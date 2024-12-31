import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/appStack/Home'
import Shop from '../screens/appStack/Shop'
import Cart from '../screens/appStack/Cart'
import Account from '../screens/appStack/Account'
import Details from '../screens/appStack/Details'
import { Home as HomeIcon, ShoppingCart, User, Briefcase } from 'lucide-react-native';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
function ShopStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="shop" component={Shop} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
function CartStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
}
function AccountStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="account" component={Account} />
    </Stack.Navigator>
  );
}

function AppStack() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'purple',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, color, size }) => {          
          let icon;
          let filled = focused ? color : 'white'

          switch (route.name) {
            case 'Home':
              icon = <HomeIcon color={color} size={size} strokeWidth={2} fill={filled} />;
              break;
            case 'Shop':
              icon = <Briefcase color={color} size={size} strokeWidth={2} fill={filled}/>;
              break;
            case 'Cart':
              icon = <ShoppingCart color={color} size={size} strokeWidth={2} fill={filled}/>;
              break;
            case 'Account':
              icon = <User color={color} size={size} strokeWidth={2} fill={filled}/>;
              break;
            default:
              icon = null;
          }
          return icon;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Shop" component={ShopStack} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Cart" component={CartStack} options={{
        headerShown: false,
        tabBarBadge: 3
      }} />
      <Tab.Screen name="Account" component={AccountStack} options={{
        headerShown: false
      }} />
    </Tab.Navigator>
  );
}

export default AppStack

const styles = StyleSheet.create({
  tabBarStyle:{
    height: 60,
    position: 'absolute',
    borderTopWidth: 1,
    elevation: 0,
    borderTopColor: 'black',
    paddingTop: 9
  }
})