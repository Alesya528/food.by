function calc(resPlase, activeClass, genderBlock, activeBlock   ){
    let result = document.querySelector(resPlase);
    
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
            console.log(Math.round((88.36 + (13.4 * weight) + (4.8 * hight) - (5.7 * old)) * activ));

        }else{
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * hight) - (4.3 * old)) * activ);
            console.log(Math.round((447.6 + (9.2 * weight) + (3.1 * hight) - (4.3 * old)) * activ));
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
                    elem.classList.remove(activeClass);
                    // console.log(elem);
                });

                e.target.classList.add(activeClass);
                // console.log(e.target);
                
                // console.log(hight, weight, old, activ, sex);
            });
            calcForm();
        })
            

    };

    staticInfaCalc(genderBlock);
    staticInfaCalc(activeBlock);

    
    
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

export default calc;
