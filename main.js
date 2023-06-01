function appendNumber(number) {
  var phoneNumber = document.getElementById('phoneNumber');
  var formattedNumber = phoneNumber.value.replace(/\D/g, '');
  formattedNumber += number;

  var phoneNumberLabel = document.getElementById('phoneNumberLabel');
  phoneNumberLabel.textContent = formatPhoneNumber(formattedNumber);

  phoneNumber.value = formattedNumber;
}

function formatPhoneNumber(number) {
  var formattedNumber = number.replace(/\D/g, '');
  var areaCode = formattedNumber.substring(0, 2);
  var firstPart = formattedNumber.substring(2, 11);
  var formatted = '(' + areaCode + ')' + firstPart;
  return formatted;
}