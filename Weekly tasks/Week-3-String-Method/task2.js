// Week 3 Task 2: Write a JavaScript file with at least 2 array variables (one string array and one
// number array) with total 5 array methods (you can use either string array or number array,
// or you can use both e.g., 2 methods using string array then 3 methods using number array).
// Write 1-2 sentences of reflection. Hint: Use console.log function for output. (No need to
// include HTML and CSS

// METHOD 1: reverse() on String Array: 
// Reverse the order of the elements in an array
 var string_array = ["120","SIT","University","Deakin"];
 var result_array = string_array.reverse();
 console.log(`Reversed array: ${result_array}`);

// METHOD 2: join() on String Array: 
// Join all the elements in an array into a single string 
// specifying a character or string to insert between each element
var new_string = result_array.join(' ');
console.log(`Joined array string: ${new_string}`);

// METHOD 3: forEach() on Number Array: 
// Iterate through array allowing some function/operation to be perfomed for each item
var costs = [ 100, 55, 210, 12 ]
costs.forEach(value => console.log(`$${value}`));


// METHOD 4: Map() on Number Array: 
// Returns an array containing the results of the first array after 
// performiing some other function / operation to each value in the first array
var costs_ex_gst = [ 100, 55, 210, 12 ]
// GST is 10% - to add 10% multiply the ex gst cost value by 1.1 
var costs_inc_gst = costs_ex_gst.map( cost_value => cost_value * 1.1);
console.log(`Costs (Inc GST): ${costs_inc_gst}`);

// METHOD 5: reduce() on Number Array: 
// Returns an single value from an array by taking an accumulating variable and
// performiing some other function / operation to each value in the first array
var total_cost_inc_gst = costs_inc_gst.reduce((total, next_price) => total = total + next_price)
console.log(`Total Cost (Inc GST): ${total_cost_inc_gst}`);

