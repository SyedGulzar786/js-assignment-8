// // var count = 0;
// function myValue(){
// var count = 0;
//     for(var i = 0; i < 5; i++){
//         count++;
// console.log(i, count)
//     }
// //  var val = document.getElementById("username").value
// //  console.log(val)
// }
// myValue()
// myValue()
// myValue()

// function foo(a, b){
//   console.log(a, b)
// }
// foo(2, 2)

// function foo(notify){
//     console.log(notify())
//   }
//   foo(alert)

//   function foo(notify){
//     console.log(notify)
//   }
//   var arr = ["smith"]
//   foo(arr[0])

// function checkAttendance (bacha){
//     var list = [1122, 2233, 3344, 4455]
//     if(list.indexOf(bacha) !== -1){
//         return "aya!"
//     }
//     else{
//         return "nhi aya!"
//     }

// }
// console.log(checkAttendance(1122),checkAttendance(2223),checkAttendance(3344),checkAttendance(4455))

// var count = 1;
// function foo(){
//     for(var i = 0; i < 3; i++){
//           count++
//           console.log(count)
//           return count
//     }
// }
//     console.log(foo())


// function checkAttendance (bacha){
//     var list = [1122, 2233, 3344, 4455]
//     if(list.indexOf(bacha) !== -1){
//         return "enrolled!"
//     }
//     else{
//         return "eliminated!"
//     }

// }
// var check = [1122, 2223, 3344, 4655]
// for(var i = 0; i < check.length; i++){
//         console.log(checkAttendance(check[i]))
// }
// // console.log(checkAttendance(1122),checkAttendance(2223),checkAttendance(3344),checkAttendance(4455))

// function foo(a, b){
//     return a * b
// }
// console.log(foo(1, 2))


// function dating(){
// var dates1 = new Date().getTime()
// var dates2 = new Date("1 june 2024").getTime()
// var store = dates2 - dates1
// store = Math.floor(store/(1000*60*60*24))
// return store
// }
// document.getElementById("div").innerHTML = `<h1>${dating()}</h1>`

function time(){
    var current = new Date("16 june 2024"); 
    var now = new Date();
    var diff =( current - now)/ 1000;

    var days = Math.floor(diff / 3600 / 24)
    var hours = Math.floor((diff / 3600) % 24);
    var min = Math.floor((diff / 60) % 60);
    var sec = Math.floor( diff % 60) ;
    
    document.getElementById("set_day").innerHTML = `<h1>${days} </h1>`;
    document.getElementById("set_hr").innerHTML = `<h1>${hours} </h1>`;
    document.getElementById("set_min").innerHTML = `<h1>${min} </h1>`;
    document.getElementById("set_sec").innerHTML = `<h1>${sec} </h1>`;
}
time();