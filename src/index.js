const keyboard = document.querySelector('.keyboard');
const inputKeyboard = document.querySelector('textarea');
const keys = document.querySelectorAll('.key');
const container = document.querySelector('.container');

function isKeyDown(e) {
    Array.from(keys).forEach(key => {
        if (key.classList.contains(e.keyCode)) {
            key.classList.toggle('active');
        }
    })
}

function isKeyUp(e) {
    Array.from(keys).forEach(key => {
        if (key.classList.contains(e.keyCode)) {
            if (!key.classList.contains('20')) {
                key.classList.remove('active');
            }
        }
    })
}

function inputTeaxtarea(e) {
    Array.from(keys).forEach(key => {
        if (key.textContent === e.key && key.textContent !== 'Backspace') {
            inputKeyboard.textContent += e.key;
        } 
    })
}

function backspace(e) {
    if (e.keyCode === 8) {
        inputKeyboard.value = inputKeyboard.value.substring(0, inputKeyboard.value.length - 1);
        console.log(inputKeyboard.value);
    }
}


document.addEventListener('keydown', isKeyDown);
document.addEventListener('keyup', isKeyUp);

document.addEventListener('keyup', inputTeaxtarea);
document.addEventListener('keyup', backspace);


    


    



