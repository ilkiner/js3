let now = new Date();
console.log(now);
document.getElementById('currentDate').textContent = now;

function ShowToast() {  
  Swal.fire({
    title: "Do you want to save the form?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
      
      console.log(todoListArr); 
    } else if (result.isDenied) {
      Swal.fire("Form are not saved", "", "info");
    }
  });
}

const FORM = document.querySelector("#todo_list_form");
const UserName = document.querySelector("#name");
const EMAIL = document.querySelector("#email");
const PhoneNumber = document.querySelector("#phone");
const ADDRESS = document.querySelector("#address");
const CITY = document.querySelector("#city");
const STATUS = document.querySelector("#status");
const PASSWORD = document.querySelector("#password");

function ChekStatus(status) {
  switch (status) {
    case active:
      return "active";
      case inactive:
        return "inactive" ;
  }
}


function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
var todoListArr = [];
FORM.addEventListener("submit", (Event) => {
  Event.preventDefault();

  
  let newTodoData = {
    id: generateUUID(),
    name: UserName.value,
    email: EMAIL.value,
    phone: PhoneNumber.value,
    address: ADDRESS.value,
    city: CITY.value,
    status: STATUS.value,
    password: PASSWORD.value,
  };

  
//   todoListArr.push(newTodoData);
// let li = document.createElement ("li");
// todoListArr.map((el)) => {
//   li.textcontent += el.name;

  
  ShowToast();  
});









// function isPalindrome(x) {
    
    
//     let str = x.toString();
    
   
    
//     str = str.toLowerCase().replace(/\s+/g, '');  

    
    
//     let reversedStr = str.split('').reverse().join('');

    
    
//     return str === reversedStr;
// }
// console.log(isPalindrome("222"));






// function isPalindromeFlexible(x) {
//  else ile etmek lazimdir  if (x < 10) {
//         return true;
//     }

    
//     if (x >= 10) {
//         return false;
//     }
    
//     str = str.toLowerCase().replace(/\s+/g, '');  

    
//     let reversedStr = str.split('').reverse().join('');

    
//     return str === reversedStr;
// }
// console.log(isPalindrome("22"));



// let newPersons=["bir","iki","uc","dord"]

// let a;
// a = 1;
// let b;
// b = 2;
// console.log(a + b);


// var a;
// a = 1;
// var b;
// b = 1
// console.log(a + b);

// function isEmpty(obj) {

//     // null and undefined are "empty"
//     if (obj == null) return true;

//     // Assume if it has a length property with a non-zero value
//     // that that property is correct.
//     if (obj.length > 0)    return false;
//     if (obj.length === 0)  return true;
// }


// /**
//  * @param {Object|Array} obj
//  * @return {boolean}
//  */
// var isEmpty = function(obj) {
//     function isEmptyObj  ( obj ) {
//         return Object.keys ( obj ) . length === 0;
//     } 
// };

// console.log(isEmptyObj ( emptyObj )) ;

// ilktask
// /**
//  * @param {Object|Array} obj
//  * @return {boolean}
//  */
// var isEmpty = function(obj) {
    
//     if (obj === undefined) return true;
    
    
//     if (Array.isArray(obj)) {
//         return obj.length === 0;
//     }
    
    
//     if (typeof obj === 'object') {
//         return Object.keys(obj).length === 0;
//     }

//     return false;
// };
// // var emptyObj = {2};
// // console.log(isEmpty(emptyObj));

// var emptyArray = [];
// console.log(isEmpty(emptyArray));

// ikincitask
// let newNums = [3, 2, 5, 4, 1, 0];
// console.log(newNums.sort((a, b) => a - b));

// let newNums1 = [{"x": 1}, {"x": 0}, {"x": -1}];
// let reversedNums1 = newNums1.reverse();
// console.log(reversedNums1);

// let newNumsthird = [[3, 4], [5, 2], [10, 1]]
// newNumsthird = newNumsthird.reverse();
// console.log(newNumsthird);


// finish


// thirdtask

// var createCounter = function(init) {
//     let count = init; 
//     return {
//       increase: function() {
//         count++;
//         return count;
//       },
//       decrease: function() {
//         count--;
//         return count;
//       },
//       reset: function() {
//         count = 0;
//         return count;
//       },
//       getCount: function() {
//         return count;
//       }
//     };
//   };
  
//   const counter = createCounter(5);
// console.log(counter.increase());
// // console.log(counter.increase());
// console.log(counter.decrease());
// console.log(counter.decrease());


// var createCounter2 = function(init) {
//     let count = init; 
//     return {
//       increase: function() {
//         count++;
//         return count;
//       },
//       decrease: function() {
//         count--;
//         return count;
//       },
//       reset: function() {
//         count = 0;
//         return count;
//       },
//       getCount: function() {
//         return count;
//       }
//     };
//   };
  
//   const counter2 = createCounter2(0);
//   console.log(counter2.increase());
//   console.log(counter2.increase());
//   console.log(counter2.decrease());
//   console.log(counter2.reset());
//   console.log(counter2.reset());
  

//   var createCounter3 = function(init) {
//     let count = init; 
//     return {
//       increase: function() {
//         ++count;
//         return count;
//       }
//     }
// };

// const Counter3 = createCounter3(10);
//   console.log(Counter3.increase());
//   console.log(Counter3.increase());
//   console.log(Counter3.increase());  

//   ancaq bu sehvdir sabah bax videodan, her defe ozu artmalidir
// let message;
// message = 'Hello';

// alert(message); 

