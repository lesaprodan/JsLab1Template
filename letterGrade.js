/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's grade.
 * @return {string} The corresponding letter grade for the given grade
 */
function letterGrade(percentGrade) {
    // Put your code here
    if (percentGrade >= 90) {
      return 'A';
    } else if (percentGrade >= 80) {
      return 'B';
    } else if (percentGrade >= 70) {
      return 'C';
    } else if (percentGrade >= 60) {
      return 'D';
    } else if (percentGrade >= 50) {
      return 'E';
    } else if (percentGrade >= 35) {
      return 'FX';
    } else {
      return 'F';
    }
  }
}
  

console.log('Running sanity checks for letterGrade:');

// Add your own sanity checks here.
