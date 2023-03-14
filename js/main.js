// Created variables

const cardKey = document.querySelector('.card__bodyKey');
const cardCode = document.querySelector('.card__bodyCode');
const cardWhich = document.querySelector('.card__bodyWhich');
const cardLocation = document.querySelector('.card__bodylocation');
const history = document.querySelector('.card__bodyHistory');
const topKey = document.querySelector('.main-top__keyCode');
const addTopTitle = document.querySelector('.title');

const arr = [];

const message = document.querySelector('.main__message');
const mainContent = document.querySelector('.main__content');
const input = document.querySelector('.main__inp');

document.body.addEventListener('keydown', function (event) {
    message.classList.add('hide');
    mainContent.classList.add('visible');
    cardKey.innerText = event.key;
    cardCode.innerText = event.code;
    cardWhich.innerText = event.which;
    
    switch (event.location) {
        case 0: cardLocation.innerText = 'General keys'; break;
        case 1: cardLocation.innerText = 'left-side modifier keys'; break;
        case 2: cardLocation.innerText = 'Right-side modifier keys'; break;
        case 3: cardLocation.innerText = 'Numpad'; break;

    }
    console.log(event);
    arr.unshift(event.key);

    let keyBlock = document.createElement('button');
    keyBlock.classList.add('history__key')
    let firstElement = history.firstChild;



    arr.reverse().forEach((el, i) => {
        console.log(arr[0] !== el);
        

    
        keyBlock.innerHTML = el;
        topKey.innerText = el;
        addTopTitle.innerHTML = `JavaScript Key Code ${event.which}`;
         
        history.insertBefore(keyBlock, firstElement);

        switch (event.code) {
            case 'Space': cardKey.innerText = 'Space';
            case 'Space': keyBlock.innerText = 'Space';
            case 'Space': topKey.innerText = 'Space';
            case 'Space': addTopTitle.innerText = `JavaScript Key Code ${event.which}`;
        }
   
        if (i > 3) {
            arr.pop();
            history.lastElementChild.remove();
        
        }
        
    });
})

// input.addEventListener('click', )
// key: "t"
// event.location
// event.code
// event.which
// history

 