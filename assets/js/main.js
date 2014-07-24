function route(el) {
  window.location.href = el.selectedOptions[0].getAttribute('data-href');
}
