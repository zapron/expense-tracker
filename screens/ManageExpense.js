import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // js trick to convert a value to boolean we add two !!

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Edit Expense` : `Add expense`,
    });
  }, [navigation, isEditing]);

  const expenseCtx = useContext(ExpensesContext);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "description from UPDATE",
        amount: 5600.0,
        date: new Date("2022-03-19"),
      });
    } else {
      expenseCtx.addExpense({
        description: "description from ADD",
        amount: 500.0,
        date: new Date("2022-03-28"),
      });
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  button: { minWidth: 120, marginHorizontal: 8 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
