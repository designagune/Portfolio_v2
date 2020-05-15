(function () {
    emailjs.init("user_DRqCnPtqQHX1mWXKlMFef");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate the contact number value
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('gmail', 'template_mtl2NdZG', this);
    alert("메일이 성공적으로 전송되었습니다!");
    document.getElementById('contact-form').reset();
});

