"use strict"
let slider = document.querySelector('.slider');
let slider_left = document.querySelector('.slider_left');
let slider_right = document.querySelector('.slider_right');

let sliderBackgrounds = ['(./Images/slider-bg.jpg)','(./Images/slider-bg1.jpg)']
let i = 0;
slider.style.backgroundImage = 'url' + sliderBackgrounds[i];// giv slider background


slider_left.addEventListener('click',function(){ //change sliden whne you click left btn
    if(i == 0){
        i++
        slider.style.backgroundImage = 'url' + sliderBackgrounds[i]; //change bg img
    }else if( i == 1 ){
        i--
        slider.style.backgroundImage = 'url' + sliderBackgrounds[i];//back slider in his first position
    }
});
//write same code 
slider_right.addEventListener('click',function(){ //change sliden whne you click right btn
    if(i == 0){
        i++
        slider.style.backgroundImage = 'url' + sliderBackgrounds[i]; //change bg img
    }else if( i == 1 ){
        i--
        slider.style.backgroundImage = 'url' + sliderBackgrounds[i];//back slider in his first position
    }
});


