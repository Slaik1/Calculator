document.addEventListener('DOMContentLoaded',() =>{
    const btnCopy=document.querySelector('.calculator__copy')
    const answer=document.querySelector('h1')

    btnCopy.onclick =() =>{
        navigator.clipboard.writeText(answer.innerText)

        btnCopy.classList.add('bounce')
        btnCopy.addEventListener('animationend',()=>{
            btnCopy.classList.remove('bounce')
        })
    }
})