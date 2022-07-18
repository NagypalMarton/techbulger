let line_Form = document.querySelector('#tr1')
line_Form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    console.log(this);
});