console.log((Date.now())); //gives The epoch readdability is poor(MILISECOND)


let todayDate = new Date()
console.log(typeof todayDate); //OBJECT
console.log(todayDate); //gives date which is also not much readable
console.log(`toSTRING: ${todayDate.toString()}`); //gives day date(month date year) time timezone and name of timezone 
console.log(`to ISOSTRING: ${todayDate.toISOString()}`); //gives standard time (year-Month-date)
console.log(`to JSON: ${todayDate.toJSON()}`); //gives date and time as per standard time (year-month-date)
console.log(`to toDateString: ${todayDate.toDateString()}`); //gives todays day and date(month day year)
console.log(`to LocalDateString: ${todayDate.toLocaleDateString()}`); //gives local date  (day/month/year)
console.log(`to LocalString: ${todayDate.toLocaleString()}`); //gives local date and time (day/month/year)


//**                 OUTPUT                     */
/*
    1734589987016
    2024-12-19T06:33:07.025Z
    toSTRING: Thu Dec 19 2024 12:03:07 GMT+0530 (India Standard Time)
    to ISOSTRING: 2024-12-19T06:33:07.025Z
    to JSON: 2024-12-19T06:33:07.025Z
    to toDateString: Thu Dec 19 2024
    to LocalDateString: 19/12/2024
    to LocalString: 19/12/2024, 12:03:07 pm

*/


                // METHOD TO DECLARE DATE

let newDate = new Date(2022, 0 ,20); // in js MONTHS STARTS WITH 0 =>Jan
console.log(newDate.toDateString());

let anotherNewDate = new Date(2024, 0 ,20 , 5 ,30)
console.log(anotherNewDate.toLocaleString());

let standardmethod = new Date("2024-11-20")
console.log(standardmethod.toLocaleString());
//**                 OUTPUT                     */
/*
Thu Jan 20 2022
20/1/2024, 5:30:00 am
20/11/2024, 5:30:00 am

*/

let timestamp = Date.now(); //gives milisecond starting from year 1970 jan 1 to present time

console.log(timestamp);
console.log(anotherNewDate.getTime());
console.log(Math.floor(timestamp/1000)); //gives milisecond

//**                 OUTPUT                     */
/*
    1734591865127
    1705708800000
    1734591865
*/


console.log(todayDate.getMonth() +1); //starts from zer0
console.log(todayDate.getDay() +1); //starts from zer0
console.log(todayDate.toLocaleString('default' , {
    //weekday: "short", //Thu
    //weekday: "long", //Thrusday
    weekday: "narrow", //T
}));

//**                 OUTPUT                     */
/*
    12
    5
    T
*/