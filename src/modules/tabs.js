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

export default tabs;