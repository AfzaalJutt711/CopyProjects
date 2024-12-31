import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import LogoutButton from '../../components/LogoutButton';

const Account = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.userCircle}>
        <Text style={styles.userInitials}>
          {user.userName.slice(0, 2)}
        </Text>
      </View>
      <Text style={styles.userName}>{user.userName}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>
      <LogoutButton></LogoutButton>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: '20'
  },
  userCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#213555',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  userInitials: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
  },
});