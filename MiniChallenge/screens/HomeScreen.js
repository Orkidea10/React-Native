import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to the Home Screen!</Text>
    <Button style={styles.btn}
      title="Go to Profile"
      onPress={() => navigation.navigate('Profile')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  btn:{
    backgroundColor: 'blue',
  }
});

export default HomeScreen;
