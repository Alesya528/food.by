'use strict'
    import calc from './moduls/calculater';
    import slider from './moduls/slider';   
    import sendForm from './moduls/sendForm';   
    import cardSend from './moduls/cards';   
    import modalWindow from './moduls/openModal';   
    import dataTime from './moduls/date';   
    import tabs from './moduls/tabs';



window.addEventListener('DOMContentLoaded', () => {
  
    calc();
    slider();
    sendForm();
    cardSend();
    modalWindow('[data-model]', '.modal');
    dataTime();
    tabs();
    

});
  
