function checkPostcode(el) {
  var output, colour;
  var postcode = el.value.match(/^(SW8|SE11|SE1)(\s)?[a-zA-Z0-9]{3}$/i);
  console.log("match postcode: ", postcode);
  if (!!postcode) {
    colour = 'rgb(149,233,149)';
    output = 'Great, you live in the catchment area!<br/>';
  } else {
    colour = 'rgb(200,200,200)'
    output = 'SH24 is currently only available to <strong>Lambeth</strong> and <strong>Southwark</strong> boroughs.';
  }
  document.getElementsByClassName('postcode-validation')[0].style.color = colour;
  document.getElementById('postcodeValidationReport').innerHTML = output;
}

function inputAddress() {
  document.getElementById('field1').value = '1a House';
  document.getElementById('field2').value = '123 Street';
  document.getElementById('field3').value = 'London';
  document.getElementById('field4').value = 'London';
  document.getElementById('field5').value = 'ABC 123';
}
