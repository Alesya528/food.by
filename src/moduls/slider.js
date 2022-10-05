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


export default {slider};