// 'use strict'


//TAB

let tabElem = document.querySelectorAll('.tabheader__item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    headBlock = document.querySelector('.tabheader__items');
// console.log(headBlock);



function defaultElem(){
    tabContent.forEach(elem => {
        elem.style.cssText = 'display: none;'
    });

    tabElem.forEach((elem) => {
        elem.classList.remove('tabheader__item_active');
    });
}


function changeElem(i = 0){
    tabContent[i].style.cssText = 'display: block;';
    tabElem[i].classList.add('tabheader__item_active');
}

defaultElem();
changeElem();

headBlock.addEventListener('click', (e) => {
    let target = e.target;
    // console.log(target.classList.contains('tabheader__item'));
    if(target && target.classList.contains('tabheader__item')){
        tabElem.forEach((item, i) => {
            if(target == item){
                defaultElem();
                changeElem(i);
            }
        })
    }
})



//DATE


let deadline = ('2022-04-30')

function timeCounting(){
    let t = Date.parse(deadline) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minuts = Math.floor(t / (1000 * 60) % 60),
        second = Math.floor(t / 1000 % 60);

   return {
       'common': t,
       'days': days,
       'hours': hours,
       'minutes': minuts,
       'second': second,
   }
}


function setTime(){
    const parentBlock = document.querySelector('.timer'),
          days = parentBlock.querySelector('#days'),
          hours = parentBlock.querySelector('#hours'),
          minutes = parentBlock.querySelector('#minutes'),
          second = parentBlock.querySelector('#seconds'),
          timeInterval= setInterval(updateClock, 1000);

    updateClock();

    function updateClock(){
        let t = timeCounting();

        days.textContent = addZero(t.days);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        second.textContent = addZero(t.second);
        

        if(t.common <= 0){
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            second.textContent = '00';
        }
    }
    
    function addZero(num){
        if(num > 0 && num<10){
            return num = '0' + num;
        }else{
            return num;
        }
    }

}

setTime();


//modal

// let btnOpenModel = document.querySelectorAll('[data-model]'),
//     modalWindow = document.querySelector('.modal');

// console.log(btnOpenModel);



let btnOpenModel = document.querySelectorAll('[data-model]'),
    modalWindow = document.querySelector('.modal');
    

// console.log(btnCloseModal);

function openModal(){
    modalWindow.classList.remove('hidden');
    modalWindow.classList.add('show');

    clearTimeout(modalOpentime);
}


btnOpenModel.forEach(item => {
    item.addEventListener('click', openModal);
    
});


function closeModal (){
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hidden');
    document.body.style.overflow = '';
}




modalWindow.addEventListener('click', (e) => {

    if(e.target.getAttribute('data-close') == 'close' || e.target.getAttribute('data-close') == ''){
        closeModal();
    }

});


document.addEventListener('keydown', (e) => {
    // console.log(e.code);
    if(e.code == 'Escape'){
        closeModal();
    }
});

const modalOpentime = setTimeout (openModal, 20000);

function openModalEndPage (){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal();
    };
    window.removeEventListener('scroll', openModalEndPage);
}

window.addEventListener('scroll', openModalEndPage);














class PatternCard {
    constructor( imgUrl, subtitle, textDesc, price, parentBlock, ...classLists){
        this.imgUrl = imgUrl;
        this.subtitle = subtitle;
        this.textDesc = textDesc; 
        this.price = price;
        this.parentBlock = document.querySelector(parentBlock);
        this.classLists = classLists;
        this.convert();
        // this.class = class;
    }


    convert(){
        return  this.price = this.price * 27;
    }

    showCard() {
        let div = document.createElement('div');
        
        if(this.classLists.length === 0) {
            this.elem = 'menu__item';
            div.classList.add(this.elem);
        } else {
            this.classLists.forEach(item => div.classList.add(item));
        }
        
        div.innerHTML = `
        <img src=${this.imgUrl} alt="vegy">
        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        <div class="menu__item-descr">${this.textDesc}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
        `;
        this.parentBlock.append(div);
        // console.log(this.parentBlock);
    }

}


let first = new PatternCard(
    "img/tabs/vegy.jpg",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    229,
    '.menu .container',
    // 'menu__item',

).showCard();


let second = new PatternCard(
    "img/tabs/elite.jpg",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    550,
    '.menu .container',
    'menu__item',
    'big',
).showCard();



let third = new PatternCard(
    "img/tabs/post.jpg",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.  ',
    430,
    '.menu .container',
    'menu__item',
).showCard();





// send form

const forms = document.querySelectorAll('form');


let response = {
    fuck : 'говно',
    middle : 'img/spiner/spinner.svg',
    end: ' Готово',
}



function postData(form){
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusLoading = document.createElement('img');
        // statusLoading.cssText = `
        // background: url(${response.middle}) no-repeat
        // width: 200px;
        // hight: 20px;
        // `;
        statusLoading.src = response.middle;
        statusLoading.style.cssText = `
        margin: 0 auto;
        display: block;
        padding: 20px 0 0 0;
        `;
        form.insertAdjacentElement('afterend', statusLoading);

        const forDate = new FormData(form);





        const object = {};
        forDate.forEach(function(value, key){
            object[key] = value;
        })

        





        fetch('server.php', {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(data => {
            return data.text()
        })
        .then(data => {
            console.log(data);
            showThinksModal(response.end);
            form.reset();
            statusLoading.remove();
        })
        .catch(() => {
            showThinksModal(response.fuck);
        })
        .finally(() => {
            form.reset();
        })

    })
};


forms.forEach( i => {
    postData(i);
});


function showThinksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    // console.log(prevModalDialog);
    prevModalDialog.classList.add('hidden');
   

    const newModalDialog =  document.createElement('div');
    newModalDialog.classList.add('modal__dialog');
    newModalDialog.innerHTML = `
    <div class="modal__content">
        <div class="modal__close" data-close='close'>×</div>
        <div class="modal__title">${message}</div>
    </div>
    `;
    document.querySelector('.modal').append(newModalDialog);
    openModal();
    setTimeout(() => {
        newModalDialog.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hidden');
        closeModal();
    }, 3000);
    
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
//   .then(response => response.json())
//   .then(json => console.log(json))


