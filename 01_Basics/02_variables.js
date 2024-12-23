const accountId = 12345;
let accountEmail = "randam@gmail.com"
var accountPassword = "9876545"
accountCity = "TDD"
let accountStatus;  // default value will be undefined


// accountId = 11111; Since it is declared as const we cannnot change it further in entire code so if we try to change then it will throw an error "TypeError: Assignment to constant variable."
accountEmail = "lorem@espum.com"  //if let is used can change anything as per out need and whenever we need 
accountPassword = "112233"  //this was previously used but not used in modern code cause there is issue with scope 
accountCity = "HWH"   // this also works similar to let but not advicable to use it




console.log(accountId); 
console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus]); // table tabulates the output as per input parameter given to console.table

/*
Output:

12345
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 12345             │
│ 1       │ 'lorem@espum.com' │
│ 2       │ '112233'          │
│ 3       │ 'HWH'             │
│ 4       │ undefined         │
└─────────┴───────────────────┘

*/