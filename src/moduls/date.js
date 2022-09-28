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

module.exports = dataTime;