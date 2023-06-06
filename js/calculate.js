document.addEventListener('DOMContentLoaded',() =>{
    const numButtons=Array.from(document.querySelector('.calculator__buttons').children).filter(item => item.innerText!='' && item.innerText!='AC')
    const textButtons=[]
    for (const key of numButtons) {
        textButtons.push(key.innerText)
    }

    const textAnswer=document.querySelector('h1')
    const textSolution=document.querySelector('h2')

    for (let index = 0; index < numButtons.length; index++) {
        numButtons[index].onclick =() =>{
        textSolution.innerText+=textButtons[index]
        }
    }

    actionButtons=Array.from(document.querySelector('.calculator__buttons').children).filter(item => item.innerText=='' || item.innerText=='AC'|| item.innerText=='.')

    actionButtons[0].onclick = () =>{
        textAnswer.innerText='0'
        textSolution.innerText=''
    }

    actionButtons[1].onclick =() =>{
        const solution=textSolution.innerText.split(/(?=[-+*%\/])/)
        const operator1=['+','-']
        const operator2=['*','/','%']
        let lastNum=solution.pop()

        if(operator1.includes(lastNum[0])){
            if(lastNum[0]==='+'){
                const newNum='-'+lastNum.slice(1)
                textSolution.innerText=solution.join('')+newNum
            }else if(lastNum[0]==='-'){
                if(operator2.includes(solution[solution.length-1])){
                    textSolution.innerText=solution.join('')+lastNum.slice(1)
                }
                else{
                    const newNum='+'+lastNum.slice(1)
                    textSolution.innerText=solution.join('')+newNum
                }
            }
        }else if(operator2.includes(lastNum[0])){
            textSolution.innerText=solution.join('')+lastNum[0]+lastNum.slice(1)*-1
        }
        else{
            textSolution.innerText=lastNum*-1
        }
    }

    actionButtons[2].onclick =() =>{
        textSolution.innerText+='^'
        validSymbols()
    }

    actionButtons[3].onclick =() =>{
        textSolution.innerText+='/'
        validSymbols()
    }

    actionButtons[4].onclick =() =>{
        textSolution.innerText+='*'
        validSymbols()
    }

    actionButtons[5].onclick =() =>{
        textSolution.innerText+='-'
        validSymbols()
    }

    actionButtons[6].onclick =() =>{
        textSolution.innerText+='+'
        validSymbols()
    }

    actionButtons[7].onclick =() =>{
        delLastSymbol()
    }

    actionButtons[8].onclick =() =>{
        if(textSolution.innerText==''){
            textSolution.innerText+='0'
        }
        textSolution.innerText+='.'
        validSymbols()
    }

    actionButtons[9].onclick =() =>{
        let solution= textSolution.innerText
        textAnswer.innerText=eval(solution.replaceAll('^','**'))
    }

    function delLastSymbol(){
        textSolution.innerText=textSolution.innerText.slice(0,-1)
    }

    function validSymbols(){
        const operators=['*','/','+','-','.','^']
        let solution=textSolution.innerText
        if((solution[solution.length-2]==='*' || solution[solution.length-2]==='/') && solution[solution.length-1]==='-'){
            if(solution[solution.length-2]===solution[solution.length-3]) delLastSymbol()
        }else if(operators.includes(solution[solution.length-2])){
            solution=solution.slice(0,-2)+solution[solution.length-1]
            textSolution.innerText=solution
        }
    }
})