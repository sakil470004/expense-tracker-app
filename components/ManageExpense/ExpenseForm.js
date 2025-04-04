import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
    function amountChangeHandler(enteredValue) {

    }
    return (
        <View>
            <Input label="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                maxLength: 5,
                onchangeText: amountChangeHandler,

            }} />
            <Input label="Date"
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    keyboardType: 'numbers-and-punctuation',
                    onChangeText: () => { },
                }}
            />
            <Input label="Description"
                textInputConfig={{
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: () => { },
                }}
            />
        </View>
    );
}
export default ExpenseForm;