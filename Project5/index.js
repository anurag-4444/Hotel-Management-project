console.log('This is exercise 52');

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const setAlarm = document.getElementById('setalarm');
const stopAlarm = document.getElementById('stopalarm');
let validHour = false;
let validMinute = false;
// console.log(hour, minute, setAlarm, stopAlarm);

hour.addEventListener('blur', () => {
    console.log('hour is blurred');
    // Validate phone here
    let regex = /^[0-9]{1,2}$/;
    let str = hour.value;
    console.log(regex, str);
    let result = regex.exec(str);
    console.log(result);
    if (regex.test(str)) {
        console.log('Your hour is valid');
        console.log(`The string "${str}" matches the expression "${regex.source}"`);
        validHour = true;
    }
    else {
        console.log('Your hour is not valid');
        console.log(`The string "${str}"  does not matches the expression "${regex.source}"`);
        validHour = false;
    }
});
minute.addEventListener('blur', () => {
    console.log('minute is blurred');
    // Validate phone here
    let regex = /^[0-9]{1,2}$/;
    let str = minute.value;
    console.log(regex, str);
    let result = regex.exec(str);
    console.log(result);
    if (regex.test(str)) {
        console.log('Your minute is valid');
        console.log(`The string "${str}" matches the expression "${regex.source}"`);
        validMinute = true;
    }
    else {
        console.log('Your minute is not valid');
        console.log(`The string "${str}"  does not matches the expression "${regex.source}"`);
        validMinute = false;
    }
});

setAlarm.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on setalarm');
    // Submit your form here
    if (validHour && validMinute) {
        console.log('Both hour and minute are correct');
        checkingTime();
    }
    else {
        console.log('one of the hour or minute are not correct');
        // let failure = document.getElementById('failure');
        // failure.classList.remove('d-none');
        // failure.classList.add('show');
        // success.classList.add("d-none");
    }
})

function checkingTime() {
    // console.log(stopAlarm)
    const set =  setInterval(() => {
        let today = new Date();
        let myHour = today.getHours();
        let myMinute = today.getMinutes();
        if (hour.value == myHour && minute.value == myMinute) {
            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
            audio.play();
            stopAlarm.addEventListener('click', ()=>{
                clearInterval(set)
            })
        }
    }, 1000);
    
    console.log(set)
}


