const accountId = 1455333;
let accountEmail = "abc@abc.com";
var accountPassword = "12345";
accountCity = "Jaipur";

accountId = 2; // Give error bcoz of const keyword (not allowed to re-initialize)
accountEmail = "hc@hc@gmail.com";
accountPassword = "121212";
accountCity = "Goa";

let accountState; // it gives undefined

// console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity]);
