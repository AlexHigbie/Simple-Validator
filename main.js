var phoneNumber = process.argv[2];
var birthdate = process.argv[3];
var zipcode = process.argv[4];




// var userInput = prompt ("What is your phone number? format XXX-XXX-XXXX")

console.log(phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-');

// var userBirthdate = prompt ("What is your birthdate? format XX/XX/XX")

console.log(birthdate.charAt(2) === '/' && birthdate.charAt(5) === '/');

// var userZipcode = prompt ("What is your zipcode? format XXXXX")

console.log(zipcode.length === 5);
