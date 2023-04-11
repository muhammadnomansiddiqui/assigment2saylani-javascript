// Question 1
//   function addClosureMethod(){
//       let localVar = 5;
//       return function (num){ 
//           console.log(num + localVar);
//       }
//   }

//   let innerFunction = addClosureMethod();
//   let innerFunction2 = addClosureMethod();
//   innerFunction2(5);
//   innerFunction2(20);

//   Question 2
//   function RecursiveFunction(size) {
//       if (size < 0) {
//           return -1;
//       }
//       if (arr[size] == input) {
//           return true;
//       }
//       return RecursiveFunction(size-1);
//   }
//   let arr = [1, 2, 3, 4, 5, 6];
//   let size = +arr.length - 1;
//   let input = +prompt("Enter a number to search ");
//   let check = RecursiveFunction(size); 
//   if(check === true){
//       console.log(true);
//   }
//   else{
//       console.log(false);
//   }

//  Question 3
//   <p>This is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//   <button type="button" onclick="AddPara()">Click me!</button> 
//   function AddPara() {
//       let myPara = document.getElementById('my-para')
//       myPara.innerHTML = "<p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa necessitatibus molestias totam minima quas maiores tempore? Vitae sit architecto iure ipsam atque non a, omnis, magni illum ullam distinctio praesentium vero temporibus explicabo cum provident ut repudiandae ratione id!</p>"
//   }

//  Question 4
//  <button type="button" onclick="AddList()">Click me!</button>
//  <ul class="ol-list">
//      <li id="addlist"></li>
//  </ul> 
//   function AddList() {
//       let myList = document.getElementById('addlist');
//       myList.innerHTML = "<ul><li>Mango</li><li>Apple</li><li>Banana</li ></ul > ";
//   }

//  Question 5

// let myPara = document.getElementById('my-para');
// myPara.innerHTML = "<b> Pakistan Zindabad</b>"
// function changeBackgroundColor() {
//     myPara.style.backgroundColor = "#000";
//     myPara.style.color = "#FFf";
// }
//qn06
// function students() {
//     let std = {
//             name: prompt("Enter Name"),
//             rollNo: +prompt("Enter Roll no"),
//             teacher: prompt("Enter Teachers Name"),
//             className: prompt("Enter Your Class"),
//           };
// }
// localStorage.setItem("name","noman");
//qno7
// let students=[];
// function provideStudent() {
//   let std = {
//     name: prompt("Enter Name"),
//     id: +prompt("Enter Roll no"),
//     section: prompt("Enter section"),
//     className: prompt("Enter Your Class"),
//   };
//   students.push(std);
//   console.log(students);
//   let stringify = JSON.stringify(students)
//   localStorage.setItem("students", stringify); 
// }
//qno8
// let prevstudents=localStorage.getItem("students");
// let students=prevstudents ? JSON.parse(prevstudents):[];
// function provideStudent() {
//   let std = {
//     name: prompt("Enter Name"),
//     id: +prompt("Enter Roll no"),
//     section: prompt("Enter section"),
//     className: prompt("Enter Your Class"),
//   };
//   students.push(std);
//   console.log(students);
//   let stringify = JSON.stringify(students)
//   localStorage.setItem("students", stringify); 
// }


