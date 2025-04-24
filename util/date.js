export function getFormattedDate(date) {
   // Array to map day indexes (0 for Sunday, 1 for Monday, etc.) to their abbreviations
   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   console.log(date?.getDate())
   const dayName = days[date.getDay()];
   
   // Get day, month (add 1 since months are zero-indexed), and year
   const day = date.getDate();
   const month = date.getMonth() + 1;
   const year = date.getFullYear();
   
   // Format the string as "Mon 14-1-2024"
   return `${dayName} ${day}/${month}/${year}`;
}   
export function getDateMinusDays(date, days) {
   return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}