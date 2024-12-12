import React from 'react';
import { Text, StyleSheet } from 'react-native';

const StatusChip = ({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Pending':
        return styles.pending;
      case 'In Transit':
        return styles.inTransit;
      case 'Delivered':
        return styles.delivered;
      default:
        return styles.default;
    }
  };

  return <Text style={[styles.chip, getStatusColor()]}>{status}</Text>;
};

const styles = StyleSheet.create({
  chip: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    textAlign: 'center',
    alignSelf: 'flex-start',
    color: '#fff',
  },
  pending: {
    backgroundColor: '#FFA500',
  },
  inTransit: {
    backgroundColor: '#007BFF',
  },
  delivered: {
    backgroundColor: '#28A745',
  },
  default: {
    backgroundColor: '#6C757D',
  },
});

export default StatusChip;