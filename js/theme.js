document.addEventListener('DOMContentLoaded',() =>{
const calculator=document.querySelector('.calculator')
const display=document.querySelector('.calculator__display')
const buttonsContainer=document.querySelector('.calculator__buttons')
const buttons=document.querySelectorAll('.button')
const containerLite=document.querySelector('.container__lite-mode')
const answer=document.querySelector('.calculator__answer')

const actionButtons=containerLite.children

actionButtons[0].onclick =() =>{
    calculator.style.backgroundColor='#FFF'
    display.style.backgroundColor='#FFF'
    buttonsContainer.style.backgroundColor='#F9F9F9'
    answer.style.color='#000'
    containerLite.style.backgroundColor='#F9F9F9'

    actionButtons[0].style.fill='#565656'
    actionButtons[1].style.fill='#565656'
    actionButtons[0].onmouseover = function () {
        actionButtons[0].style.fill='#000'
    }
    actionButtons[0].onmouseleave = function () {
        actionButtons[0].style.fill = '#565656'
    }
    actionButtons[1].onmouseover = function () {
        actionButtons[1].style.fill='#000'
    }
    actionButtons[1].onmouseleave = function () {
        actionButtons[1].style.fill = '#565656'
    }

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.backgroundColor='#F4F4F4'
        buttons[index].style.color='#000'
        buttons[index].onmouseover = function () {
            buttons[index].style.backgroundColor = '#EAEAEA'
        };
        buttons[index].onmouseleave = function () {
            buttons[index].style.backgroundColor = '#F4F4F4'
        }
    }
    buttons[0].style.color='#50F2D3'
    
}

actionButtons[1].onclick =() =>{
    calculator.style.backgroundColor='#22252D'
    display.style.backgroundColor='#22252D'
    buttonsContainer.style.backgroundColor='#292D36'
    answer.style.color='#FFF'
    containerLite.style.backgroundColor='#292D36'

    actionButtons[0].style.fill='#FFF'
    actionButtons[1].style.fill='#FFF'
    actionButtons[0].onmouseover = function () {
        actionButtons[0].style.fill='rgba($color: #000, $alpha: 0.9)'
    }
    actionButtons[0].onmouseleave = function () {
        actionButtons[0].style.fill = '#FFF'
    }
    actionButtons[1].onmouseover = function () {
        actionButtons[1].style.fill='rgba($color: #000, $alpha: 0.9)'
    }
    actionButtons[1].onmouseleave = function () {
        actionButtons[1].style.fill = '#FFF'
    }

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.backgroundColor='#272B33'
        buttons[index].style.color='#FFF'
        buttons[index].onmouseover = function () {
            buttons[index].style.backgroundColor = '#1e2127'
        };
        buttons[index].onmouseleave = function () {
            buttons[index].style.backgroundColor = '#272B33'
        }
    }
    buttons[0].style.color='#50F2D3'
}
})