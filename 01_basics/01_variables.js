const accountId = 23422  //1: prefered for constants
let accountEmail = "manasi@man.com"  //2. prefered for variables
var accountPassword = "324mansi"  //not prefered
accountCity = "Pune"  //not prefered
let accountState;  //shows default value as undefined
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

//change values:
//accountId = 2;  //not allowed
accountEmail = "md.md.com"
accountPassword = "jfkiudwfv"
accountCity = "banglore"
accountState = "MP"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
