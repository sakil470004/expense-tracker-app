import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  // loading tittle according to the isEditing state
  // we can use useLayoutEffect instead of useEffect to set the title
  // because we want to set the title before the screen is rendered
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    // delete expense logic
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    // confirm expense logic
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.button} >Cancel</Button>
        <Button onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {
        isEditing &&
        <View style={styles.deleteContainer}>

          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={24} onPress={deleteExpenseHandler} />
        </View>
      }
    </View>
  );
}
export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});