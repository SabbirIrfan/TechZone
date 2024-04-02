import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { uid } from 'uid';

const Invoice = ({ cartItems, orderForm }) => {
  // Generate transaction number
  const transactionNumber = uid();

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Hey {orderForm.name}</Text>
            <Text style={styles.transactionNumber}>Transaction Number: {transactionNumber}</Text>
          </View>
          <View style={styles.address}>
            <Text>Name: {orderForm.name}</Text>
            <Text>Address: {orderForm.address}</Text>
            <Text>Email: {orderForm.email}</Text>
            <Text>Phone Number: {orderForm.phoneNumber}</Text>
          </View>
          <View style={styles.items}>
            {cartItems.map((item) => (
              <View key={item.id} style={styles.item}>
                <Text>{item.title}</Text>
                <Text>Quantity: {item.amount}</Text>
                <Text>Price: ${item.price}</Text>
              </View>
            ))}
          </View>
          <View style={styles.total}>
            <Text>Total Price: ${totalPrice}</Text>
          </View>
                  </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
      },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  transactionNumber: {
    marginBottom: 10,
  },
  address: {
    marginBottom: 20,
  },
  items: {
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderBottom: '1 solid #edf2f9',
  },
  total: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  payNow: {
    fontSize: 18,
    backgroundColor: '#1e2e50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: 5,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default Invoice;
