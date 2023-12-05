/* Switch case is an alternative of if else statement. It mostly comes handy when checking different
values of a variable or different results of a function */

const month = "March";
switch (
  month // As we are checking month, so we passed month in condition ()
) {
  case "January": // case keyword with the value to match
    console.log("Month is January");
    break; // it breaks the further execution of the block
  case "March":
    console.log("Month is March");
    break;
  default:
    console.log("Month is not found");
    break;
}
