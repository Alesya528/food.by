/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/moduls/calculater.js":
/*!**********************************!*\
  !*** ./src/moduls/calculater.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc(){
    result = document.querySelector('.calculating__result span');

    let sex = 'female',
    hight, weight, old, 
    activ = 1.375;




    function calcForm(){
        if(!sex || !hight || !weight || !old || !activ){
            result.textContent = '___';
            return
        }

        if(sex === 'male'){
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * hight) - (5.7 * old)) * activ);
            

        }else{
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * hight) - (4.3 * old)) * activ);
            
        }

    }

    calcForm();

    function staticInfaCalc(parentBlock){
        let parent = document.querySelectorAll(`${parentBlock} div`);


        parent.forEach(item => {
            item.addEventListener('click', (e) => {
                
            
            

                if(e.target.getAttribute('data-active')) {
                    activ = +e.target.getAttribute('data-active');
                    // console.log(activ);
                    
                }else if(e.target.getAttribute('data-sex')){
                    sex = e.target.getAttribute('data-sex');
                    // console.log(sex);
                    
                }else{
                    console.log('stuff')
                };
                // console.log(activ, sex);

                parent.forEach(elem => {
                    elem.classList.remove('calculating__choose-item_active');
                    // console.log(elem);
                });

                e.target.classList.add('calculating__choose-item_active');
                // console.log(e.target);
                
                console.log(hight, weight, old, activ, sex);
            });
            calcForm();
        })
            

    };

    staticInfaCalc('.calculating__choose_gender');
    staticInfaCalc('.calculating__choose_big');

    
    
    function dinamicInfo(selector){
        let item = document.querySelector(selector);
        // console.log(parent);
        
            item.addEventListener('input', () => {
                switch(item.getAttribute('id')) {
                    case 'height':
                        hight = +item.value;
                        break;

                    case 'weight':
                        weight = +item.value;
                        break;

                    case 'age':
                        old = +item.value;
                        break;

                }
                calcForm()
                
            })
        
        

    }

    dinamicInfo('#height');
    dinamicInfo('#weight');
    dinamicInfo('#age');


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({calc});


/***/ }),

/***/ "./src/moduls/cards.js":
/*!*****************************!*\
  !*** ./src/moduls/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cardSend(){
    



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


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({cardSend});

/***/ }),

/***/ "./src/moduls/date.js":
/*!****************************!*\
  !*** ./src/moduls/date.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dataTime(){

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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({dataTime});

/***/ }),

/***/ "./src/moduls/openModal.js":
/*!*********************************!*\
  !*** ./src/moduls/openModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(){
    modalWindow.classList.remove('hidden');
    modalWindow.classList.add('show');
    clearTimeout(modalOpentime);
}


function closeModal (){
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hidden');
    document.body.style.overflow = '';
}

function modalWindow(btnSelector, modalSelector){

    

    let btnOpenModel = document.querySelectorAll(btnSelector),
    modalWindow = document.querySelector(modalSelector);


    // console.log(btnCloseModal);

    


    btnOpenModel.forEach(item => {
    item.addEventListener('click', openModal);

    });


   




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



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({modalWindow});



/***/ }),

/***/ "./src/moduls/sendForm.js":
/*!********************************!*\
  !*** ./src/moduls/sendForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _openModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openModal */ "./src/moduls/openModal.js");






function sendForm(){
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
        (0,_openModal__WEBPACK_IMPORTED_MODULE_0__.openModal)();
        setTimeout(() => {
            newModalDialog.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hidden');
            (0,_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
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


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({sendForm});

/***/ }),

/***/ "./src/moduls/slider.js":
/*!******************************!*\
  !*** ./src/moduls/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(){
        const slide = document.querySelectorAll('.offer__slide'),
        mainSlider = document.querySelector('.offer__slider'),  
        slideNumNow = document.getElementById('current'),
        slideNumConst = document.getElementById('total'),
        arrowClickPrev = document.querySelector('.offer__slider-prev'),
        arrowClickNext = document.querySelector('.offer__slider-next'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;


    let indexSlide = 1;
    let offset = 0;




    if(slide.length < 10){
        slideNumConst.textContent = `0${slide.length}`;
        slideNumNow.textContent = `0${indexSlide}`;

    }else {
        slideNumConst.innerHTML = slide.length;
        slideNumNow.textContent = indexSlide;
    }

    function addZeroForNumNom(num) {
        if(slide.length < 10){
            slideNumNow.textContent = `0${num}`;
        }else {
            slideNumNow.textContent = num;
        }
    }

    slidesField.style.width = 100 * slide.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slide.forEach(item => { 
        item.style.width = width;
    });


    arrowClickNext.addEventListener('click', () => {
        if(offset == +parseInt(width) * (slide.length - 1)){
            offset = 0;
        }else {
            offset += +parseInt(width);
        }


        slidesField.style.transform = `translateX(-${offset}px)`;

        if(indexSlide == slide.length){
            indexSlide = 1;
        }else {
            indexSlide++;
        }


        addZeroForNumNom(indexSlide);

        dots.forEach(dot => dot.style.opacity = .5);
        dots[indexSlide - 1].style.opacity = 1;
    });


    arrowClickPrev.addEventListener('click', () => {
        if(offset == 0){
            offset = +parseInt(width) * (slide.length - 1);
        }else {
            offset -= +parseInt(width);
        }


        slidesField.style.transform = `translateX(-${offset}px)`;

        if(indexSlide == 1){
            indexSlide = slide.length;
        }else {
            indexSlide--;
        }

        addZeroForNumNom(indexSlide);

        opacityForIndSlide(indexSlide);

        
    });

    ////////////////////////DOTS IN SLIDER///////////////////////////////

    function opacityForIndSlide(num) {
        dots.forEach(dot => dot.style.opacity = .5);
        dots[num - 1].style.opacity = 1;
    }



    let indicator = document.createElement('ol');

    indicator.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-right: 15%;
        margin-left: 15%;
        justify-content: center;
        z-index: 100;
        display: flex;
        list-style: none;
    `;


    mainSlider.append(indicator);

    let dots = [];

    for(let i = 0; i < slide.length; i++){
        let dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i+1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            color: #000;
            opacity: 0.5;
            height: 7px;
            width: 30px;
            transition: opacity .6s ease;
            margin-right: 3px;
            margin-left: 3px;
            margin-bottom: 7px;
            cursor: pointer;
            background-color: white;
            // background-clip: padding-box;
            // border-top: 5px solid transparent;
        `;

        indicator.append(dot);

        if(i == 0){
            dot.style.opacity = 1;
        }

        dots.push(dot);
    }


    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            let slideTo = e.target.getAttribute('data-slide-to');

            addZeroForNumNom(slideTo);

            opacityForIndSlide(slideTo);

            offset = +parseInt(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

        });
        
    });








    //////////////СЛАЙДЕР 1/////////////////////////


    // function showSlidee(){
    //     arrowClick.addEventListener('click', (e) => {
    //         if(e.target.classList.contains('offer__slider-prev')){
    //             console.log('ok');
    //         } else if(e.target.classList.contains('offer__slider-next')){
    //              console.log('okkkk')
    //         }
    //     });
    // }
    // showSlidee();

    // if (slide.length < 10){
    //     slideNumConst.innerHTML = `0${slide.length}`;
    // }else{
    //     slideNumConst.innerHTML = slide.length;
    // }

    // showSlide(1);
    // console.log(slide.length);

    // function showSlide(n){
    //     if(n > slide.length){
    //         indexSlide = 1;
    //     };

    //     if(n < 1){
    //         indexSlide = slide.length;
    //     };



    //     slide.forEach(item => item.style.display = 'none');
    //     slide[indexSlide - 1].style.display = 'block';



    //     if (slide.length < 10){
    //         slideNumNow.innerHTML = `0${indexSlide}`;
    //     }else{
    //         slideNumNow.innerHTML = indexSlide;
    //     }
    // };



    // function plusSlides(n){
    //     showSlide(indexSlide +=n);
    // };


    // arrowClickPrev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // arrowClickNext.addEventListener('click', () => {
    //     plusSlides(1);
    // });

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({slider});

/***/ }),

/***/ "./src/moduls/tabs.js":
/*!****************************!*\
  !*** ./src/moduls/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(){
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

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({tabs});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduls_calculater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/calculater */ "./src/moduls/calculater.js");
/* harmony import */ var _moduls_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/slider */ "./src/moduls/slider.js");
/* harmony import */ var _moduls_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/sendForm */ "./src/moduls/sendForm.js");
/* harmony import */ var _moduls_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/cards */ "./src/moduls/cards.js");
/* harmony import */ var _moduls_openModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/openModal */ "./src/moduls/openModal.js");
/* harmony import */ var _moduls_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/date */ "./src/moduls/date.js");
/* harmony import */ var _moduls_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moduls/tabs */ "./src/moduls/tabs.js");

    ;
       
       
       
       
       
    



window.addEventListener('DOMContentLoaded', () => {
  
    (0,_moduls_calculater__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_moduls_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_moduls_sendForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_moduls_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_moduls_openModal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-model]', '.modal');
    (0,_moduls_date__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_moduls_tabs__WEBPACK_IMPORTED_MODULE_6__["default"])();
    

});
  

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map