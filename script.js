let DOB = document.querySelector(".dobInput");
let btnValue = document.querySelector(".btn");
let Result = document.querySelector(".resultValue");

function onShowClicked() {
  let DOB_value = DOB.value;
  console.log(DOB_value, typeof DOB_value);

  let DobNewValue = DOB_value.replaceAll("-", "");
  console.log("replaced", DobNewValue, typeof DobNewValue);

  let DOB_array = DobNewValue.split("");
  console.log("array", DOB_array);
  let yearValue = DobNewValue.slice(0, 4);
  let monthValue = DobNewValue.slice(4, 6);
  let dateValue = DobNewValue.slice(6, 8);
  console.log(yearValue);
  console.log(monthValue);
  console.log(dateValue);

  let diplayedDOB_Value = dateValue + monthValue + yearValue;
  console.log(diplayedDOB_Value, typeof diplayedDOB_Value);

  let joinedDOB_String = diplayedDOB_Value.split("").reverse().join("");
  console.log(joinedDOB_String);

  if (diplayedDOB_Value == joinedDOB_String) {
    var PalindromeString = "Your Birthday is Palindrome";
  } else {
    PalindromeString = "Your Birthday is not Plaindrome";
  }

  Result.innerText = PalindromeString;
}

btnValue.addEventListener("click", onShowClicked);
