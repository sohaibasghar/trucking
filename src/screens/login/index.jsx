// src/screens/LoginScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import StyledTextInput from '../../components/input/StyledTextInput';
import ContainedButton from '../../components/button/ContainedButton';
import { useNavigation } from '@react-navigation/native';
import axiosClient from '../../apiClient/axiosClient';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      try {
        const response = await axiosClient.post('/login', { email, password });
        if (response.status === 200) {
          navigation.navigate('Dashboard');
        } else {
          Alert.alert('Error', 'Invalid email or password.');
        }
      } catch (error) {
        Alert.alert('Error', 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <StyledTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <StyledTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ContainedButton title="Login" onPress={handleLogin} color="#28a745" />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Create new account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  registerText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;