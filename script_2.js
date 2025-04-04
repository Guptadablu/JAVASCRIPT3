//STRING in js

// let str = "APNACOLLEGE";
// let str2 = "W GUPTA";

// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str2[0]);
// console.log(str2[2]);

//............................................

//TEMPLATE LITERAL (` W GUPTA `)

// let specialString = `w gupta`;
// console.log(specialString);
// console.log(typeof specialString);
// console.log(specialString.length);

// // real life example 

// let obj = {
//     item : "pen",
//     color : "black",
//     price : 10,
// }
// console.log("the cost of", obj.item, "is", obj.price , "ruppess");

//.................................................................

// escape character 

// let specialString = `APNA\nCOLLEGE`;
// console.log(specialString);

// tap character 

// let specialString = `APNA\tCOLLEGE`;
// console.log(specialString);

// string methods

// //str.toLowerCase()
// let specialString = "APNACOLLEGE";
// console.log(specialString);
// console.log(specialString.toLowerCase());


// //str.toUpperCase()
// let specialString = "apnacollege";
// console.log(specialString);
// console.log(specialString.toUpperCase());


// //str.trim() , (trim white spaces)
// let specialString = "       apna   college      js ";
// console.log(specialString);
// console.log(specialString.trim());

//.....................................................................................................
  
//Q.prompt the user to entre their full name. generate a username for them based on their input.
//  start username with @ and follwed by their fullname and ending with fullname length. 
// ex:- username = "shradhakhapra"; , username should be = " @shradhakhapra13"

  let userName  = prompt("Enter Your Full Name Here : ");

 let spclStr = `@${userName}${userName.length}`;
 console.log(spclStr);

