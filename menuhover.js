function Highlight() {
    let h = document.documentElement;
    let b = document.body;
    let st = 'scrollTop';
    let sh = 'scrollHeight';


    let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

    if (percent <30) {
        document.querySelectorAll('.navbar .nav-link')[0].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[1].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[1].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[0].style.transform = '';

    }else if (percent >= 32.1 && percent <48) {
        document.querySelectorAll('.navbar .nav-link')[0].style.borderBottom = '3px solid #C6596F';
        document.querySelectorAll('.navbar .nav-link')[0].style.transform = 'scale(1.05)';

        document.querySelectorAll('.navbar .nav-link')[1].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[1].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.transform = '';

    } else if (percent >= 48 && percent <77.5) {
        document.querySelectorAll('.navbar .nav-link')[1].style.borderBottom = '3px solid #C6596F';
        document.querySelectorAll('.navbar .nav-link')[1].style.transform = 'scale(1.05)';

        document.querySelectorAll('.navbar .nav-link')[0].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[0].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.transform = '';
    } else if (percent >= 77.5 && percent < 95.6) {
        document.querySelectorAll('.navbar .nav-link')[2].style.borderBottom = '3px solid #C6596F';
        document.querySelectorAll('.navbar .nav-link')[2].style.transform = 'scale(1.05)';

        document.querySelectorAll('.navbar .nav-link')[1].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[0].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[1].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[0].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[3].style.transform = '';
    }else if (percent >= 95.6 ) {
        document.querySelectorAll('.navbar .nav-link')[3].style.borderBottom = '3px solid #C6596F';
        document.querySelectorAll('.navbar .nav-link')[3].style.transform = 'scale(1.05)';

        document.querySelectorAll('.navbar .nav-link')[1].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[0].style.borderBottom = '';
        document.querySelectorAll('.navbar .nav-link')[1].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[2].style.transform = '';
        document.querySelectorAll('.navbar .nav-link')[0].style.transform = '';
    }
}
setInterval(Highlight, 300);