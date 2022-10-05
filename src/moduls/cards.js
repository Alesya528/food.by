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

export default {cardSend};