document.addEventListener('DOMContentLoaded',() =>{
    const body=document.querySelector('body')
    const btnWhiteTheme=document.querySelector('#action__theme-white')
    const btnDarkTheme=document.querySelector('#action__theme-dark')

    btnWhiteTheme.onclick =() =>{
        body.classList.add('body_white')
    }

    btnDarkTheme.onclick =() =>{
        body.classList.remove('body_white')
    }
})