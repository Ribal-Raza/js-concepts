let value = "23";
let valueInNumber = Number(value); //converting string into number (typecasting)
console.log(value, typeof value);
console.log(valueInNumber, typeof valueInNumber);

/*sometimes there are other characters in string other than numbers, JS will also convert them 
but their value will be NaN (not a number), but if you will check their type with 'typeof', it will
show their type 'number'*/
let value2 = "23gh/";
let value2InNumber = Number(value2);
console.log(value2InNumber, typeof value2InNumber);

let temperatue = null;
let temperatue2; // its value is not specified so its current value is undefined
let isTemp0 = true;
let isTemp0InNum = Number(isTemp0); // it will convert 'true' to 1 and 'false' to 0
let temperatureInNumber = Number(temperatue); // it will convert null into 0
let temperature2InNumber = Number(temperatue2); // it will convert 'undefined' into NAN
console.log(temperatureInNumber, typeof temperatureInNumber);
console.log(temperature2InNumber, typeof temperature2InNumber);
console.log(isTemp0InNum, typeof isTemp0InNum);

// Conversion of number OR strings in Boolean
let name1 = "";
let name1InBoolean = Boolean(name1); // will convert into false
let name2 = "Ribal";
let name2InBoolean = Boolean(name2); // will convert into true
let name3 = 0;
let name3InBoolean = Boolean(name3); // 0 will convert into false and 1 will convert into true
console.log(name1InBoolean, typeof name1InBoolean);
console.log(name2InBoolean, typeof name2InBoolean);
console.log(name3InBoolean, typeof name3InBoolean);

//conversion of numbers and Boolean in Strings
let anyNumber = 25;
let anyNumberInString = String(anyNumber); // 25 will be converted in "25" string
let anyBool = true;
let anyBoolInString = String(anyBool); // true will be converted in "true" string, same for false
console.log(anyNumberInString, typeof anyNumberInString);
console.log(anyBoolInString, typeof anyBoolInString);

//some confusion in string to number conversions and vice versa
console.log(1 + 2); //two numbers are adding up, so obviously answer will be 3
console.log("1" + 2); // a string and a number are adding up, answer will be 12
console.log(1 + "2"); // a string and a number are adding up, answer will be 12
console.log("1" + 2 + 2); // first value of this addition is string, so whole addition will be a string 122
console.log(1 + 2 + "2"); // first two values are number they will add up to become 3 with "2" and give 32

// prefix and postfix with incremental and decremental values
//'++' is short hand of adding/incrementing 1 to value
//'--' is short hand for subtracting/decrementing 1 from value
let counterPost = 10;
let counterPre = 10;
counterPost++; // This is Postfix increment, It adds 1 to value after variable call.
++counterPre; //This is Prefix increment, It adds 1 to value before variable call
console.log(counterPost, counterPre);
counterPost--; // This is Postfix decrement, It subtracts 1 to value after variable call.
--counterPre; // This is Prefix decrement, It dubtracts 1 to value after variable call.
console.log(counterPost, counterPre);
