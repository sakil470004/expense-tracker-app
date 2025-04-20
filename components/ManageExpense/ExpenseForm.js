import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: '',
    });

    function amountChangedHandler(inputIdentifier,enteredText) {
        setInputValues((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: enteredText,
            };
        });
    }
    return (
        <View style={styles.form}>
            <Text style={styles.formTitle}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}

                    label="Amount" textInputConfig={{
                        keyboardType: 'decimal-pad',
                        maxLength: 5,
                        onchangeText: amountChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount,
                        placeholder: 'Amount...ex : 10'
                    }} />
                <Input label="Date"
                    style={styles.rowInput}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        keyboardType: 'numbers-and-punctuation',
                        onChangeText: amountChangedHandler.bind(this, 'date'),
                        value: inputValues.date,
                    }}

                />
            </View>
            <Input label="Description"
                textInputConfig={{
                    multiline: true,
                    placeholder: 'Enter Description for your Expense',
                    // autoCorrect: false,//default is true
                    // autoCapitalize:'none',//default is 'sentences'
                    onChangeText: amountChangedHandler.bind(this, 'description'),
                    value: inputValues.description,
                }}
            />
        </View>
    );
}
export default ExpenseForm;
// style for input
const styles = StyleSheet.create({
    form: {
        marginTop: 100,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 24,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 24,

    },
    rowInput: {
        flex: 1,
        height: 50,
    },

});


