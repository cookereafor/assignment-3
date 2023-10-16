const phoneNumberForm = document.getElementById("phoneNumberForm");
const phoneNumberInput = document.getElementById("phoneNumber");
const resultDiv = document.getElementById("result");

phoneNumberInput.addEventListener("input", function () {
  const phoneNumber = phoneNumberInput.value.replace(/\s+/g, "");

  // Check if the phone number length is not within the valid range
  if (
    !(
      phoneNumber.length <= 11 ||
      (phoneNumber.length <= 14 && phoneNumber.startsWith("+234"))
    )
  ) {
    // Clear the result div
    resultDiv.innerHTML = "";
    return; // Exit the function early
  }

  // Regular expressions to match phone number prefixes
  const mtnPattern = /^(\+234|0)?(803|806|703|706|813|810|814|816|903|906)/;
  const gloPattern = /^(\+234|0)?(805|807|815|811|905|907|905|015)/;
  const airtelPattern = /^(\+234|0)?(802|808|812|817|902|904|907|901|908|909)/;
  const _9mobilePattern =
    /^(\+234|0)?(809|817|818|909|908|902|903|908|909|901)/;

  if (mtnPattern.test(phoneNumber)) {
    displayResult("./logo/mtn.svg", "MTN");
  } else if (gloPattern.test(phoneNumber)) {
    displayResult("./logo/globacom.svg", "GLO");
  } else if (airtelPattern.test(phoneNumber)) {
    displayResult("./logo/airtel.svg", "Airtel");
  } else if (_9mobilePattern.test(phoneNumber)) {
    displayResult("./logo/9mobile.svg", "9mobile");
  } else {
    // Clear the result div if the phone number doesn't match any pattern
    resultDiv.innerHTML = "";
  }
});

function displayResult(path, carrier) {
  resultDiv.innerHTML = `<img src=${path} alt=${carrier}>`;
}
