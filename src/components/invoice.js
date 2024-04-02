import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { uid } from 'uid';

const Invoice = ({ cartItems, orderForm }) => {
  const transactionNumber = uid();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0);
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.header}>Invoice</Text>
          <Text style={styles.transactionNumber}>Transaction Number: {transactionNumber}</Text>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{orderForm.name}</Text>
            <Text>{orderForm.address}</Text>
            <Text>{orderForm.phoneNumber}</Text>
            <Text>{orderForm.email}</Text>
          </View>
          <View style={styles.invoiceDetails}>
            <Text style={styles.invoiceTitle}>Invoice Details</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={styles.columnHeader}>Description</Text>
                <Text style={styles.columnHeader}>Quantity</Text>
                <Text style={styles.columnHeader}>Price</Text>
              </View>
              {cartItems.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{item.title}</Text>
                  <Text style={styles.tableCell}>{item.amount}</Text>
                  <Text style={styles.tableCell}>${item.price}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Total Price:</Text>
                  <Text style={styles.tableCell}>{totalAmount}</Text>
                  <Text style={styles.tableCell}>${totalPrice}</Text>
          </View>
          <View style={styles.orderDetails}>
            <Text>Order Details:</Text>
            <Text>Name: {orderForm.name}</Text>
            <Text>Address: {orderForm.address}</Text>
            <Text>Email: {orderForm.email}</Text>
            <Text>Phone Number: {orderForm.phoneNumber}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionNumber: {
    marginBottom: 10,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5,
  },
  invoiceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: 'lightgray',
  },
  columnHeader: {
    width: '33%',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableCell: {
    width: '33%',
    padding: 5,
    textAlign: 'center',
  },
  total: {
    marginBottom: 20,
  },
  orderDetails: {},
});

export default Invoice;
