// Make func using regular expression that accepts pin codes only exactly 4 or 6 nums long.

function validatePIN (pin) {
  const validation = /^[0-9]{4}([0-9]{2})?$/
  return pin.match(validation) ? true : false;
}

console.log(validatePIN("1"))//false, "Wrong output for '1'
console.log(validatePIN("12"))//false, "Wrong output for '12'
console.log(validatePIN("123"))//false, "Wrong output for '123'
console.log(validatePIN("12345"))//false, "Wrong output for '12345'
console.log(validatePIN("1234567"))//false, "Wrong output for '1234567'
console.log(validatePIN("-1234"))//false, "Wrong output for '-1234'
console.log(validatePIN("1.234"))//false, "Wrong output for '1.234'
console.log(validatePIN("-1.234"))//false, "Wrong output for '-1.234'
console.log(validatePIN("00000000"))//false, "Wrong output for '00000000'

console.log(validatePIN("1234"))//true, "Wrong output for '1234'"
console.log(validatePIN("0000"))//true, "Wrong output for '0000'"
console.log(validatePIN("1111"))//true, "Wrong output for '1111'"
console.log(validatePIN("123456"))//true, "Wrong output for '123456'"
console.log(validatePIN("098765"))//true, "Wrong output for '098765'"
console.log(validatePIN("000000"))//true, "Wrong output for '000000'"
console.log(validatePIN("123456"))//true, "Wrong output for '123456'"
console.log(validatePIN("090909"))//true, "Wrong output for '090909'"