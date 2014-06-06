function cs_button(el) {
  var selected = el.getAttribute('data-next-step');
  console.log('selected:', selected);
  document.getElementById(selected).style.display = "block"
}

function cs_select(el) {
  var selected = el.selectedOptions[0].getAttribute('data-next-step');
  console.log('selected:', selected);
  document.getElementById(selected).style.display = "block"
}
