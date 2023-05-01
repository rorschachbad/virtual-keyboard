const keyboard = document.querySelector('.keyboard');
const inputKeyboard = document.querySelector('textarea');
const keys = document.querySelectorAll('.key');
const container = document.querySelector('.container');

const arrKeys = Array.from(keys);

alert('Клавиатура делалась под Windows_OC');

const defaultKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 
'\\', 'del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 
'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];

const pressShiftKeyboard = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 
'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del', 
'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 
'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift', 
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'];

const rusKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7',
 '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у',
 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del', 
 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 
 "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 
 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', 
 '↓', '→', 'Ctrl'];

let isCapslockActive = false;
let pressShiftActive = false;

function mouseClick(e) {
        if (e.target.innerText !== 'Backspace' 
        && e.target.innerText !== 'Tab' && e.target.innerText !== 'CapsLock'
        && e.target.innerText !== 'Enter' && e.target.innerText !== 'Shift'
        && e.target.innerText !== 'Alt' && e.target.innerText !== 'Ctrl'
        && e.target.innerText !== 'Win' && e.target.innerText !== 'del') {
                inputKeyboard.value += e.target.innerText;
        } 
}


function isKeyDown(e) {
    Array.from(keys).forEach(key => {
        if (key.classList.contains(e.keyCode) && !key.classList.contains('active')  
        && !key.classList.contains('rshift') && !key.classList.contains('rctrl')  
        && !key.classList.contains('ralt')) {
            key.classList.add('active');
        } else if (key.classList.contains('active') && !key.classList.contains('rshift')) {
            key.classList.remove('active');
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
        if (key.textContent === e.key && key.textContent !== 'Backspace' 
        && key.textContent !== 'Tab' && key.textContent !== 'CapsLock'
        && key.textContent !== 'Enter' && key.textContent !== 'Shift'
        && key.textContent !== 'Alt') {
                inputKeyboard.value += event.key;
        } 
    })
}

function BackSpace(e) {
document.addEventListener('click', mouseClick);

    if (e.keyCode === 8) {
        inputKeyboard.value = inputKeyboard.value.substring(0, inputKeyboard.value.length - 1);
    }
}

function Tab(e) {
    if (e.keyCode === 9) {
        e.preventDefault();
        inputKeyboard.value += '    ';
    }
}

function alt(e) {
    if (e.keyCode === 18) {
        e.preventDefault();
    }
}

function CapsLock(e) {
    if (e.keyCode === 20) {
        isCapslockActive = !isCapslockActive;
        let stringSymbols = '';
        Array.from(keys).forEach(key => {
                stringSymbols += key.textContent.toLowerCase();
        })
        // ОСТАВИЛ ТОЛЬКО БУКВЫ
        const arrOnlyLetters = stringSymbols.replace (/[^a-zа-я]+/g, '').split('');
        const setUniqLetters = new Set(arrOnlyLetters);
        
        const strUniqLetters = Array.from(setUniqLetters).join();


        Array.from(keys).forEach(key => {
            for (let i = 0; i < strUniqLetters.length; i++) {
                if (key.textContent.toLowerCase() === strUniqLetters[i].toLowerCase() && isCapslockActive) {
                    key.textContent = key.textContent.toUpperCase();
                } else if (key.textContent.toLowerCase() === strUniqLetters[i].toLowerCase() && !isCapslockActive) {
                    key.textContent = key.textContent.toLowerCase();
                }             
            }
        })
        
    }
}



function pressShiftDown(e) {
    if (e.keyCode === 16) {
        pressShiftActive = !pressShiftActive;
        for (let i = 0; i < arrKeys.length; i++) {
            for (let i = 0; i < pressShiftKeyboard.length; i++) {
                if (e.key !== pressShiftKeyboard[i] && pressShiftActive) {
                    arrKeys[i].textContent = pressShiftKeyboard[i];
                }   
            }
        }
    }
}

function pressShiftUp(e) {
    if (e.keyCode === 16) {
        pressShiftActive = !pressShiftActive;
        for (let i = 0; i < arrKeys.length; i++) {
            for (let i = 0; i < defaultKeyboard.length; i++) {
                if (e.key !== defaultKeyboard[i] && !pressShiftActive) {
                    arrKeys[i].textContent = defaultKeyboard[i];
                }   
            }
        }
    }
}

function Space(e) {
    if (e.keyCode === 32) {
        inputKeyboard.value += ' ';
    }
}

function Enter(e) {
    if (e.keyCode === 13) {
        inputKeyboard.value += '\n';
    }
}

function ArrowLeft(e) {
    if (e.keyCode === 37) {
        inputKeyboard.value += '←';
    }
}
function ArrowTop(e) {
    if (e.keyCode === 38) {
        inputKeyboard.value += '↑';
    }
}
function ArrowBottom(e) {
    if (e.keyCode === 40) {
        inputKeyboard.value += '↓';
    }
}
function ArrowRight(e) {
    if (e.keyCode === 39) {
        inputKeyboard.value += '→';
    }
}

document.addEventListener('keydown', alt)
document.addEventListener('keydown', ArrowLeft);
document.addEventListener('keydown', ArrowTop);
document.addEventListener('keydown', ArrowBottom);
document.addEventListener('keydown', ArrowRight);
document.addEventListener('keydown', Enter);
document.addEventListener('keydown', Enter);
document.addEventListener('keydown', Enter);
document.addEventListener('keydown', Enter);
document.addEventListener('keydown', Space);
document.addEventListener('keydown', CapsLock);
document.addEventListener('keydown', Tab);
document.addEventListener('keydown', isKeyDown);
document.addEventListener('keydown', inputTeaxtarea);
document.addEventListener('keydown', BackSpace);
document.addEventListener('keydown', pressShiftDown)

document.addEventListener('keyup', pressShiftUp)
document.addEventListener('keyup', isKeyUp);
document.addEventListener('click', mouseClick);




    


    



