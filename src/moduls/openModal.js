function modalWindow(){

    

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



}

module.exports = modalWindow;