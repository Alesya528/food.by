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

export default {modalWindow};
export {openModal, closeModal};
