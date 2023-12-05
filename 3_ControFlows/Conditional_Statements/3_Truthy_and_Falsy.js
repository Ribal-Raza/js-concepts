/* Sometime, we have to confirm/check wether a variable has any value or not, then we proceed with further
checking. For example, In case of checking an entered email, we first have to check wether user has entered
some email or not, then we proceed with futher checking of email like it's length, does it has an '@'
symbol, does it has any '.com' extension etc. 
So in case of checking wether a varibale holds any value or not, concepts of truthy and falsy comes in.
In short, 'truthy' are values which are assumed to be true.
'falsy' are values which are assumed to be false*/

const myName = "Ribal";
const myNickName = "";

if (myName) {
  console.log(`You have entered your name ${myName}`);
} else {
  console.log("You have not entered your name");
}
/* In above code, there is only 'myName' in conditional statement, so it will check wether myName has any
value or not. In this case myName has a value of "Ribal", so it is 'truthy'*/

if (myNickName) {
  console.log(`You have entered your nick name ${myNickName}`);
} else {
  console.log("You have not entered your nick name");
}
/* In above code, there is only 'myNickName' in conditional statement, so it will check wether myNickName
has any value or not. In this case myNickName has no value, so it is 'falsy'*/

// here comes an interesting case
const myArray = [];
if (myArray) {
  console.log(`Got your Array`);
} else {
  console.log("No Array found");
}
// In above case, the output will be "Got your Array", which means empty array is truthy value

/* There are following falsy values 
Falsy values: false, 0, "", -0, BigInt 0n, null, undefined, NAN
Other than above falsy values, all values are truthy.
Some Truthy values: "0" or '0', "false" or 'false', [], {}, function(){}
*/
