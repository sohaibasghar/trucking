// src/components/CustomInput.jsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const StyledTextInput = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType, autoCapitalize }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});

export default StyledTextInput;