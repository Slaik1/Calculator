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
        console.log(textAnswer[0]);
        textAnswer.innerText='0'
        textSolution.innerText=''
    }

    actionButtons[1].onclick =() =>{
        const solution=textSolution.innerText.split(/(?=[-+*%\/])/)
        console.log(solution);

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
        replaceSymbol()
        textSolution.innerText+='%'
    }

    actionButtons[3].onclick =() =>{
        replaceSymbol()
        textSolution.innerText+='/'
    }

    actionButtons[4].onclick =() =>{
        replaceSymbol()
        textSolution.innerText+='*'
        
    }

    actionButtons[5].onclick =() =>{
        replaceSymbol()
        textSolution.innerText+='-'
    }

    actionButtons[6].onclick =() =>{
        replaceSymbol()
        textSolution.innerText+='+'
    }

    actionButtons[7].onclick =() =>{
        delLastSymbol()
    }

    actionButtons[8].onclick =() =>{
        replaceSymbol()
        if(textSolution.innerText==''){
            textSolution.innerText+='0'
        }
        textSolution.innerText+='.'
    }

    actionButtons[9].onclick =() =>{
        let text= textSolution.innerText.split(/(?=[-+*%\/])/)
        if(text.includes('%')){
            let result=[]
            for (let i = 0;i < text.length; i++) {
                if(text[i]==='%'){
                    result.push(i)
                }
            }
            for (let i = 0; i < result.length; i++) {
                text.splice(result[i]-i,1)
                let res=text[result[i]-1-i]
                text[result[i]-1-i]=res[0]+(res.slice(1)/100)
            }
            console.log(text);
            const answer =text.join('')
            console.log(answer);
            textAnswer.innerText=eval(answer)
        }
        else{
            textAnswer.innerText=eval(textSolution.innerText)
        }
    }

    function delLastSymbol(){
        textSolution.innerText=textSolution.innerText.slice(0,-1)
    }

    function replaceSymbol(){
        const operators=['*','/','+','-','.']
        let text=textSolution.innerText
        if((text[text.length-1]==='*' || text[text.length-1]==='/'|| text[text.length-1]==='%') && !operators.includes(text[text.length-2])){

        }else if(operators.includes(text[text.length-1])){
            delLastSymbol()
        }
    }
})