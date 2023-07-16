// const fibonacci2 = (n) => {
//     if (n <= 1) {
//         return [0, 1]
//     } else {
//         let fib = fibonacci2(n - 1);
//         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//         // console.log(fib);
//         return fib;
//     }
// }
// console.log(fibonacci2(7));

// const fibonacci3 = (n) => {
//     if (n <= 1) {
//         return [0, -1]
//     } else {
//         let fib = fibonacci3(n - 1);
//         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//         return fib;
//     }
// }
// console.log(fibonacci3(7));
// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(10000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);

// const date1 = new Date("2030-03-16");
// const date2 = new Date("2030-03");
// const date3 = new Date("2018");
// const date4 = new Date("03/16/2030");
// const date5 = new Date("2030/03/16");
// const date6 = new Date("2030/3/16");
// const date7 = new Date("March 16, 2030");
// const date8 = new Date("March 16, 2030 14:25:00");
// const date9 = new Date("2030-03-16 14:25:00");
// const date11 = new Date("2030-03-16T14:25:00");
// const date12 = new Date("16 March 2030");
// const date13 = new Date(453454563657);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);
// console.log(date6);
// console.log(date7);
// console.log(date8);
// console.log(date9);
// console.log(date11);
// console.log(date12);
// console.log(date13);

// const date = new Date(2030, 2, 16, 14, 25, 23, 0);
// console.log(date);

// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Повертає години
// console.log("getHours(): ", date.getHours());

// // Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());

// // const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// // Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040, 4, 8);
// // "Tue May 08 2040 14:50:00 GMT+0300"

// console.log(date);

const date = new Date("March 16, 2030 14:25:00");

console.log(date.toString());
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(date.toTimeString());
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(date.toLocaleTimeString());
// "2:25:00 PM"

console.log(date.toUTCString());
// "Sat, 16 Mar 2030 12:25:00 GMT"

console.log(date.toDateString());
// "Sat Mar 16 2030"

console.log(date.toISOString());
// "2030-03-16T12:25:00.000Z"

console.log(date.toLocaleString());
// "3/16/2030, 2:25:00 PM"

console.log(date.getTime());
// 1899894300000
