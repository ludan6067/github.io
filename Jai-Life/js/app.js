
// 宣告一個navSlide函式
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');

    // 漢堡條click事件
    burger.addEventListener('click', () => {
        // nav滑進來
        nav.classList.toggle('nav-active');
        // 漢堡條變X
        burger.classList.toggle('toggle');
        })
    }

    // 執行navSlide函式
    navSlide();

//各項說明:
    // 箭頭函式,navSlide=()=>{ } 相當於 navSlide=function(){ }
    // toggle，撥動開關，偵測變數nav裡面有沒有.nav-active這個class，如果有就刪掉，沒有就加進去
    // 監聽事件,addEventListener('什麼時候要做', 做什麼事(){  })

    AOS.init({
        duration: 1000,
        easing: 'ease-in-out'


    });
