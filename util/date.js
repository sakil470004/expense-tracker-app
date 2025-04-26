export function getFormattedDate(date) {
   // // Array to map day indexes (0 for Sunday, 1 for Monday, etc.) to their abbreviations
   // const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   // const dayName = days[date.getDay()];
   
   // // Get day, month (add 1 since months are zero-indexed), and year
   // const day = date.getDate();
   // const month = date.getMonth() + 1;
   // const year = date.getFullYear();
   
   // // Format the string as "Mon 14-1-2024"
   // return `${dayName} ${day}/${month}/${year}`;
   
   return date.toISOString().slice(0, 10)
   // only work for date in format YYYY-MM-DD . if we use other format, we need to convert it to YYYY-MM-DD first
}   
export function getDateMinusDays(date, days) {
   return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}