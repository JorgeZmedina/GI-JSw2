// Store mass and height for Tom and Jerry
let tom_mass = 8; // in grams
let tom_height = 9; // in inches
let jerry_mass = 45; // in grams
let jerry_height = 10; // in inches

// Convert mass to pounds and height to inches
let tom_mass_pounds = tom_mass / 453.59;
let jerry_mass_pounds = jerry_mass / 453.59;

// Calculate BMI for Tom and Jerry
let tom_bmi = tom_mass_pounds / (tom_height ** 2) * 703;
let jerry_bmi = jerry_mass_pounds / (jerry_height ** 2) * 703;

// Compare the two BMI's
let is_tom_bmi_higher = tom_bmi > jerry_bmi;

// Print a string to the console with the comparison
console.log(`Is Tom's BMI higher than Jerry's? ${is_tom_bmi_higher}`);
