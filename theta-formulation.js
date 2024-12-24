// There were days in math class when I wished I had a simple way to quickly solve for any given variable in a formula and check my answers accordingly.
// If only I had a time machine...

// Oh well! Anyhow, using the following formula:

// Angle (in Radians) === Arc length / Radius length
// Write a function thetaFormula:

// 1. When given two of the values and "?" returns the number value of the missing one.
// 2. When given all three values returns a boolean value verifying if the statement is true or false.
// 3. When given one or no values as arguments or invalid arguments returns null.

// For Example:

//     thetaFormula("?", 12, 35)        -->    0.343
//     thetaFormula(3, "?", 14)         -->    42
//     thetaFormula(5, 16, "?")         -->    3.2

//     thetaFormula(2, 5, 7)            -->    false
//     thetaFormula(2, 20, 10)          -->    true
//     thetaFormula( -1, 1, -1)         -->    true

//     thetaFormula(1, 2)               -->   null
//     thetaFormula(1)                  -->   null
//     thetaFormula()                   -->   null
//     thetaFormula("?", "?", 2)        -->   null

// If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places.
// The function should be able to return negative values, they will be tested for.

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/567610d21541a88876000024/train/javascript
function thetaFormula(radius, arc, angle) {
	// Helper function to check if a value is a valid number
  const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);
  const args = [radius, arc, angle];
  const questionMarks = args.filter(arg => arg === "?").length;
  if (questionMarks > 2 || args.length < 2) return null;
  const values = args.map(arg => (arg === "?" ? null : parseFloat(arg)));
  let vAngle = values[0], vArc = values[1], vRadius = values[2];

  let answer = null;
      // Calculate missing values
    if (questionMarks === 1) {
        if (vAngle === null) {
            // Calculate angle
            answer = parseFloat((vArc / vRadius).toFixed(3));
        } else if (vArc === null) {
            // Calculate arc length
           answer = parseFloat((vAngle * vRadius).toFixed(3));
        } else if (vRadius === null) {
            // Calculate radius
            answer = parseFloat((vArc / vAngle).toFixed(3));
        }
    } else if (questionMarks === 0) {
        // Check if all values are provided
        if (isValidNumber(vAngle) && isValidNumber(vArc) && isValidNumber(vRadius)) {
            //Seems the kata in codewars has a bug, as when the 3 values are given and are wrong, it asks for null instead of false
            return vAngle === vArc / vRadius;
        }
    }
  return isValidNumber(answer) ? answer : null;
}
