import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import FormModal from '../../components/form';
import StatusChip from '../../components/chip';
import FAB from '../../components/button/Fab';


const DashboardScreen = () => {
  const [requests, setRequests] = useState([]);
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const dummyRequests = [
      {
        id: 1,
        location: 'New York',
        size: 'Large',
        weight: '10kg',
        pickupTime: '2023-10-01 10:00 AM',
        deliveryTime: '2023-10-02 02:00 PM',
        status: 'Pending',
      },
      {
        id: 2,
        location: 'Los Angeles',
        size: 'Medium',
        weight: '5kg',
        pickupTime: '2023-10-03 09:00 AM',
        deliveryTime: '2023-10-04 01:00 PM',
        status: 'In Transit',
      },
      {
        id: 3,
        location: 'Chicago',
        size: 'Small',
        weight: '2kg',
        pickupTime: '2023-10-05 11:00 AM',
        deliveryTime: '2023-10-06 03:00 PM',
        status: 'Delivered',
      },
    ];

    setRequests(dummyRequests);
  }, []);

  const handleAddRequest = () => {
    const newRequest = {
      id: requests.length + 1,
      location,
      size,
      weight,
      pickupTime,
      deliveryTime,
      status: 'Pending',
    };

    setRequests([...requests, newRequest]);
    setLocation('');
    setSize('');
    setWeight('');
    setPickupTime('');
    setDeliveryTime('');
    setModalVisible(false);
    Alert.alert('Request Added', 'Your shipping request has been added successfully.');
  };

  const renderRequest = ({ item }) => (
    <View style={styles.requestContainer}>
      <Text style={styles.requestText}>Location: {item.location}</Text>
      <Text style={styles.requestText}>Size: {item.size}</Text>
      <Text style={styles.requestText}>Weight: {item.weight}</Text>
      <Text style={styles.requestText}>Pickup Time: {item.pickupTime}</Text>
      <Text style={styles.requestText}>Delivery Time: {item.deliveryTime}</Text>
      <StatusChip status={item.status} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Shipping Requests</Text>
      <FlatList
        data={requests}
        renderItem={renderRequest}
        keyExtractor={(item) => item.id.toString()}
      />
      <FAB onPress={() => setModalVisible(true)} />
      <FormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddRequest}
        location={location}
        setLocation={setLocation}
        size={size}
        setSize={setSize}
        weight={weight}
        setWeight={setWeight}
        pickupTime={pickupTime}
        setPickupTime={setPickupTime}
        deliveryTime={deliveryTime}
        setDeliveryTime={setDeliveryTime}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    color: '#333',
    marginBottom: 24,
  },
  requestContainer: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  requestText: {
    fontSize: 16,
    marginBottom: 8,
  },
  fab: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  fabText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default DashboardScreen;