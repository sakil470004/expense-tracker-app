import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

function ManageExpenses({route,navigation}) {
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
  return (
    <View>
      <Text>ManageExpenses Screen</Text>
    </View>
  );
}
export default ManageExpenses;