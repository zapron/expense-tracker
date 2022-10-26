import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSE = [
  {
    id: `e1`,
    description: `A pair of shoes`,
    amount: 58.0,
    date: new Date(`2022-10-26`),
  },
  {
    id: `e2`,
    description: `A pair of gloves`,
    amount: 50.0,
    date: new Date(`2022-10-27`),
  },
  {
    id: `e3`,
    description: `A pair of tshirts`,
    amount: 1000.6,
    date: new Date(`2022-10-28`),
  },
  {
    id: `e4`,
    description: `A cycle`,
    amount: 26000.5,
    date: new Date(`2022-10-29`),
  },
  {
    id: `e5`,
    description: `A pump`,
    amount: 500.0,
    date: new Date(`2022-10-30`),
  },
  {
    id: `e6`,
    description: `A pair of tshirts`,
    amount: 1000.6,
    date: new Date(`2022-10-28`),
  },
  {
    id: `e7`,
    description: `A cycle`,
    amount: 26000.5,
    date: new Date(`2022-10-29`),
  },
  {
    id: `e8`,
    description: `A pump`,
    amount: 500.0,
    date: new Date(`2022-10-30`),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSE}/>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    }
});
