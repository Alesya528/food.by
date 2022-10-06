import {openModal, closeModal} from './openModal'





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


}

export default sendForm;