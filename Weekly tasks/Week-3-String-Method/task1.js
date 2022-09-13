// Week 3 Task 1: Write a JavaScript file with at least 5 string methods and 1-2 sentences
// reflection. Hint: Use console.log function for output. (No need to include HTML and CSS)

// METHOD 1: toUpperCase()
// Convert lowercass text to uppercase
var user_name = 'joshua erickson';
var user_name_uppercase = user_name.toUpperCase();
// Using Template Literal string to log output
console.log(`Lowercase Username: ${user_name} | Uppercase Username ${user_name_uppercase}`);

// METHOD 2: split()
// Split a string into substrings using the specified separator and return result as an array.
var email_address = 'jerickson@deakin.edu.au';
// split email address into username and domain parts
var split_array = email_address.split('@');
console.log(`email_address: ${email_address} | Split result (array contents) = ${split_array} | Username: ${split_array[0]} | Domain: ${split_array[1]}`);

// METHOD 3: slice()
// Returns the part of a string from start position to end position parameters
// End parameter is option and if left out slice includes from start to end of string
var order_number = 'PON7234324601'
console.log(`Order Ref: ${order_number} | Order Number (numerals only): ${order_number.slice(3)}`
);

// METHOD 4: replace()
// Replaces first match of search string with alternate string
var favourite_text = 'My favourite text is Warhammer.';
var replaced_text = favourite_text.replace('Warhammer', 'lorem ipsum');
console.log(`Before: ${favourite_text}  |  After: ${replaced_text}`);

// METHOD 5: includes()
// Returns true if search String exists as a substring of the string
var message = 'Javascript string methods are amazing!!';
let result = message.includes("amazing");
console.log(`"${message}" includes the word "amazing" =  ${result}`); 