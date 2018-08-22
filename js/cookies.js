var cookieX = document.querySelector('.cookie__x');
var cookieButton = document.querySelector('.cookie__button');


document.addEventListener("DOMContentLoaded", function(event) {
   let timeCookie = localStorage.getItem('cookieInfo');
    // console.log(timeCookie);
    const monthMs = 2592000000;

    // console.log(Date.now(), timeCookie, Date.now() - timeCookie )
    if(timeCookie === null || Date.now() - parseInt(timeCookie) > monthMs) {
    document.querySelector('#cookie').classList.add('show')
    }
});


function cookieCallback() {
    // alert("Hello World!");
    var contener = document.querySelector('#cookie');

    contener.parentNode.removeChild(contener);

    localStorage.setItem('cookieInfo', Date.now())

}

cookieX.addEventListener("click", cookieCallback);
cookieButton.addEventListener("click", cookieCallback);