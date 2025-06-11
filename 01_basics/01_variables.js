const accountId = 155624
let accountEmail = "apansuriya@google.com"
var accountPassword = "12345"
accountCity = "Surat"

/*
prefer not using var 
because of issue in blockscope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword]); //to show in tabular form