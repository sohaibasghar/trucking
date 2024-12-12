// src/components/CustomButton.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ContainedButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ContainedButton;