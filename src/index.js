'use strict'
    import calc from './moduls/calculater.js';
    import slider from './moduls/slider';   
    import sendForm from './moduls/sendForm';   
    import cardSend from './moduls/cards';   
    import modalWindow from './moduls/openModal';   
    import dataTime from './moduls/date';   
    import tabs from './moduls/tabs';



window.addEventListener('DOMContentLoaded', () => {
  
    calc('.calculating__result span', 'calculating__choose-item_active','.calculating__choose_gender', '.calculating__choose_big');
    slider();
    sendForm();
    cardSend();
    modalWindow('[data-model]', '.modal');
    dataTime();
    tabs();
    

});
  

console.log(document.querySelector('.calculating__result span'))