const keyboard = document.querySelector('.keyboard');
const inputKeyboard = document.querySelector('textarea');
const keys = document.querySelectorAll('.key');
const container = document.querySelector('.container');



 const pressShiftKeyboard = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 
 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del', 
 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 
 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '', 'Shift', 
 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '', '', '', 'Ctrl'];



let isCapslockActive = false;



function isKeyDown(e) {
    console.log(e);
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
        if (key.textContent === e.key && key.textContent !== 'Backspace' 
        && key.textContent !== 'Tab' && key.textContent !== 'CapsLock'
        && key.textContent !== 'Enter') {
                inputKeyboard.value += event.key;
        } 
    })
}

function BackSpace(e) {
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

        console.log(strUniqLetters);

        Array.from(keys).forEach(key => {
            for (let i = 0; i < strUniqLetters.length; i++) {
                if (key.textContent.toLowerCase() === strUniqLetters[i].toLowerCase() && isCapslockActive) {
                    key.textContent = key.textContent.toUpperCase();
                    console.log('Uppercase');
                } else if (key.textContent.toLowerCase() === strUniqLetters[i].toLowerCase() && !isCapslockActive) {
                    key.textContent = key.textContent.toLowerCase();
                    console.log('lowercase');
                }             
            }
        })
        
    }
}

const rusKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7',
 '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у',
 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del', 
 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 
 "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 
 'ю', '.', '', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '', 
 '', '', 'Ctrl'];

let changeLangActive = false;

const KEYS = Array.from(keys);

function changeLanguage(e) {
    if (e.keyCode === 16) {
        changeLangActive = !changeLangActive;
        for (let i = 0; i < KEYS.length; i++) {
            for (let k = 0; k < rusKeyboard.length; k++) {
                if (KEYS[i] !== rusKeyboard[k] && changeLangActive) {
                    KEYS[i].textContent = rusKeyboard[i];
                }
            }
        }
    }
}

document.addEventListener('keydown', changeLanguage)

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
document.addEventListener('keyup', isKeyUp);

document.addEventListener('keydown', inputTeaxtarea);
document.addEventListener('keydown', BackSpace);


    


    



