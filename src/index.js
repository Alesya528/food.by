// 'use strict'


import tabs from './modules/tabs';
import SetTime from './modules/data';
import modalOpen from './modules/modalAct';
import slider from './modules/slider';
import calculator from "./modules/calculator"

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    SetTime();
    modalOpen();
    slider();
    calculator();
});










//modal

// let btnOpenModel = document.querySelectorAll('[data-model]'),
//     modalWindow = document.querySelector('.modal');

// console.log(btnOpenModel);











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


const getElemForCard = async(url) => {
    const elem = await fetch(url);

        if(!elem.ok) {
            throw new Error(`Could not fetch ${url}, status ${elem.status} `);
        }
    return await elem.json();
};

// getElemForCard('http://localhost:3000/menu')
//     .then(data => {

//         data.forEach(({img, title, descr, price}) => {
//             new PatternCard(img, title, descr, price, '.menu .container').showCard();
//         });
//     });


getElemForCard('http://localhost:3000/menu')
    .then( data => createCard(data));

createCard = data => {
    data.forEach(({img, title, descr, price}) => {
        const elem = document.createElement('div');

        elem.classList.add('menu__item');

        this.price = price * 27;

        elem.innerHTML = `
            <img src=${img} alt="vegy">
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
        document.querySelector('.menu .container').append(elem);
    })
}

// let first = new PatternCard(
//     "img/tabs/vegy.jpg",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     229,
//     '.menu .container',
//     // 'menu__item',

// ).showCard();


// let second = new PatternCard(
//     "img/tabs/elite.jpg",
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     550,
//     '.menu .container',
//     'menu__item',
//     'big',
// ).showCard();



// let third = new PatternCard(
//     "img/tabs/post.jpg",
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.  ',
//     430,
//     '.menu .container',
//     'menu__item',
// ).showCard();





// send form

const forms = document.querySelectorAll('form');


let response = {
    fuck : 'говно',
    middle : 'img/spiner/spinner.svg',
    end: ' Готово',
}

const postDate = async(url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
        
    });

    return await res.json();

};








function bindPostData(form){
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

        const formData = new FormData(form);





       const json = JSON.stringify(Object.fromEntries(formData.entries()));



        
        postDate('http://localhost:3000/requests', json)
        .then(data => {
            // console.log(data);
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
    bindPostData(i);
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


// fetch('db.json')
// .then(data => data.json())
// .then(res => console.log(res));

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
//   .then(response => response.json())
//   .then(json => console.log(json))











