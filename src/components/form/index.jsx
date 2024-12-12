import React from 'react';
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import StyledTextInput from '../input/StyledTextInput';

const ModalComponent = ({
  visible,
  onClose,
  onAdd,
  location,
  setLocation,
  size,
  setSize,
  weight,
  setWeight,
  pickupTime,
  setPickupTime,
  deliveryTime,
  setDeliveryTime,
}) => {
  return (
    <Modal  visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Shipping Request</Text>
          <StyledTextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <StyledTextInput
            style={styles.input}
            placeholder="Size"
            value={size}
            onChangeText={setSize}
          />
          <StyledTextInput
            style={styles.input}
            placeholder="Weight"
            value={weight}
            onChangeText={setWeight}
          />
          <StyledTextInput
            style={styles.input}
            placeholder="Pickup Time"
            value={pickupTime}
            onChangeText={setPickupTime}
          />
          <StyledTextInput
            style={styles.input}
            placeholder="Delivery Time"
            value={deliveryTime}
            onChangeText={setDeliveryTime}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.outlinedButton} onPress={onAdd}>
              <Text style={styles.outlinedButtonText}>Add Request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: '#28a745', // Updated primary color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  outlinedButtonText: {
    color: '#28a745', // Updated primary color
    fontSize: 16,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#dc3545', // Red color for cancel button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#dc3545', // Red color for cancel button text
    fontSize: 16,
  },
});

export default ModalComponent;