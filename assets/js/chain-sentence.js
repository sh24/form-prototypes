function cs_button(el) {
  var selected = el.getAttribute('data-next-step');
  console.log('selected:', selected);
  document.getElementById(selected).style.display = 'block';
}

function cs_select(el) {
  var nextStep = el.selectedOptions[0].getAttribute('data-next-step');
  if (!!nextStep) {
    document.getElementById(nextStep).style.display = 'inline';
    console.log('next step:', nextStep);
  }
  el.style.backgroundColor = '#f5f5f5';
  el.disabled = true;
}
