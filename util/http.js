import axios from 'axios';
const BACKEND_URL = 'https://react-native-course-37377-default-rtdb.firebaseio.com';
export async function storeExpense(expenseData){
    const response=await axios.post(`${BACKEND_URL}/expenses.json`,expenseData)
    // name property is the id of the expense
    const id=response.data.name;
    // console.log(id);
    return id;
}

export async function fetchExpenses(){
    // console.log('fetching expenses');
   const response=await  axios.get(`${BACKEND_URL}/expenses.json`)
   const expenses = [];
    for (const key in response.data) {
         const expenseObj = {
              id: key,
              amount: response.data[key].amount,
              date: new Date(response.data[key].date),
              description: response.data[key].description,
         };
         expenses.push(expenseObj);
    }
    return expenses;
}

export  function  updateExpense(id, expenseData){
    return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}
export function deleteExpense(id){
    return axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}

// test this has all the http request