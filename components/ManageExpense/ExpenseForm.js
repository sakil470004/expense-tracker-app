import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        },
    });
    function amountChangedHandler(inputIdentifier, enteredText) {
        setInputs((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: {
                    value: enteredText,
                    isValid: true,
                },
            };
        });
        // console.log('inputIdentifier', inputIdentifier);
        // console.log('enteredText', enteredText);
    }
    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        }
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
        const descriptionIsValid = expenseData.description.trim().length > 0
        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // show error message for user
            // Alert.alert('Invalid Input', 'Please check your input values');
            setInputs((prevState) => {
                return {
                    amount: { value: prevState.amount.value, isValid: amountIsValid },
                    date: { value: prevState.date.value, isValid: dateIsValid },
                    description: { value: prevState.description.value, isValid: descriptionIsValid },
                }
            })
            return;
        }

        onSubmit(expenseData);
    }
    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;
    return (
        <View style={styles.form}>
            <Text style={styles.formTitle}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}

                    label="Amount"
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                        placeholder: 'Amount...ex : 10',
                        keyboardType: 'decimal-pad',
                    
                    
                        maxLength: 5,
                        onChangeText: amountChangedHandler.bind(this, 'amount'),
                        value: inputs.amount.value,

                    }} />
                <Input label="Date"
                    style={styles.rowInput}
                    invalid={!inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        keyboardType: 'numbers-and-punctuation',
                        onChangeText: amountChangedHandler.bind(this, 'date'),
                        value: inputs.date.value,
                    }}

                />
            </View>
            <Input label="Description"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    placeholder: 'Enter Description for your Expense',
                    // autoCorrect: false,//default is true
                    // autoCapitalize:'none',//default is 'sentences'
                    onChangeText: amountChangedHandler.bind(this, 'description'),
                    value: inputs.description.value,
                }}
            />
            {formIsInvalid && <Text style={styles.errorText}>Invalid Input -- Please Check input data</Text>}
            <View style={styles.buttons}>
                <Button mode='flat' onPress={onCancel} style={styles.button} >Cancel</Button>
                <Button onPress={submitHandler} style={styles.button}>{submitButtonLabel}</Button>
            </View>
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
    errorText: {
    textAlign: 'center',
    color: 'red',
    margin: 8,
    fontSize: 16,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },

});


