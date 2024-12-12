// src/screens/RegisterScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import StyledTextInput from '../../components/input/StyledTextInput';
import ContainedButton from '../../components/button/ContainedButton';
import { useNavigation } from '@react-navigation/native';
import axiosClient from '../../apiClient/axiosClient';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
  
    try {
      const response = await axiosClient.post('/register', {
        firstName,
        lastName,
        email,
        password,
      });
  
      const data = response.data;
  
      if (response.status === 200) {
        navigation.navigate('Login');
        // Navigate to another screen if needed
      } else {
        Alert.alert('Registration Failed', data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <StyledTextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <StyledTextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
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
      <StyledTextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <ContainedButton title="Register" onPress={handleRegister} color="#007BFF" />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
  loginText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;