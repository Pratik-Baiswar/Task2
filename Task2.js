function calculateScore(str1) {
  var lst = str1.split(" ");
  var scr = 0;
  for (var i = 0; i < lst.length; i++) {
    try {
      if (Number(lst[i])) {
        scr += 4;
      } else {
        throw i;
      }
    } catch (i) {
      length = lst[i].length;
      if (length > 7) {
        scr += 3;
      } else if (length < 5) {
        scr += 0;
      } else {
        scr += 1;
      }
    }
  }
  return scr;
}

function contain(str1, str2) {
  arr2 = str2.split(" ");
  str3 = "";
  for (var i = 0; i < arr2.length; i++) {
    if (str1.includes(arr2[i])) {
      str3 += arr2[i] + " ";
    }
  }
  return calculateScore(str3);
}

var str1 =
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year.";
var str2 = "There are Twenty-Four hours in a day. A year has 14 months";

var regex = /[!".,]/g;
var str01 = str1.replace(regex, "").toLowerCase();
var str02 = str2.replace(regex, "").toLowerCase();

console.log("Correct Answer Scoring : " + calculateScore(str01));
console.log("Candidate Response Scoring : " + contain(str01, str02));
console.log("Percentage Score : " + (contain(str01, str02) / calculateScore(str01)) * 100 + "%");
console.log("There is an error in question as word 'Calender' has 3 points instead of 1");
