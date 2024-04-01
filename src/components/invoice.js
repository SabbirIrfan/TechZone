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
        <View style={styles.section}>
          <Text style={styles.title}>Invoice</Text>
          <View style={styles.info}>
            <Text>Transaction Number: {transactionNumber}</Text>
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
  info: {
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
  },
  total: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default Invoice;
