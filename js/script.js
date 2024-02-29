let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
    showSlide(slideIndex += n);
    console.log('nextSlide -> ' + n);
    console.log('slideIndex -> ' + slideIndex);    
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('header-img');
    console.log('listImage -> ' + listImage.length);
    console.log('n -> ' + n);
    if (n > listImage.length) slideIndex = 1;

    let i = 0;
    for (let i = 0; i < listImage.length;  i++) {
    }
    while (i < listImage.length) {
        i++;
    }
    listImage[slideIndex -1].computedStyleMap.display = 'block';
}

const slideInterval = setInterval(() => nextSlide(1), 5000);

document.getElementById('send-message-us-form').addEventListener("click", () => sendForm());

function sendForm() {
    let date = Date();
    let firstName = document.forms['message-us-form']['first-name'];
    let lastName = document.forms['message-us-form']['last-name'];
    if (firstName.value == '' || lastName.value == '') {
        alert('Harap Periksa Kembali Inputan Anda');
    } else {
        document.getElementById('current-time').innerHTML = date;
        document.getElementById('full-name').innerHTML = firstName.value + ' ' + lastName.value;
    }
    return false;
}

    console.log(date);
