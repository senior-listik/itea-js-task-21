const rowKey = document.querySelector('.row__key');
const rowCode = document.querySelector('.row__code');
const rowWhich = document.querySelector('.row__which');
const keyHistory = document.querySelector('.row__history');
const arr = [];

document.body.addEventListener('keydown', function(event){
    rowKey.innerText = event.key;
    rowCode.innerText = event.code;
    rowWhich.innerText = event.which;
    console.log(event);
    arr.unshift(event.key);

    let keyBlock = document.createElement('div');
    keyBlock.classList.add('key')
    let firstElement = keyHistory.firstChild;

    arr.reverse().forEach((el, i) => {

        keyBlock.innerHTML = el;
        keyHistory.insertBefore(keyBlock, firstElement);

        if (i > 3) {
            arr.pop();
            keyHistory.lastElementChild.remove();
        }
    });
})
// key: "t"
// event.location
// event.code
// event.which
// history

//  <div class="row">
//         <div class="row__key"></div>
//         <div class="row__code"></div>
//         <div class="row__which"></div>
//         <div class="row__history"></div>
//     </div>