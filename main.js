function calcDigit(cnpj, numbers){ 
    let digitDigitCal = 0
    let digitDigit = 0
    cnpj.map((digit,index)=>{
        digitDigitCal+= digit*numbers[index]
        if(index>=cnpj.length-1){
            let resto = digitDigitCal%11
            digitDigit = resto>=3?11-resto:0
        }
    })
    return digitDigit
}

function validateCNPJ(cnpj){
    const firsMultiplicationNumbers = [5,4,3,2,9,8,7,6,5,4,3,2]
    const secondMultiplicationNumbers = [6, ...firsMultiplicationNumbers]
    
    const lastTwoDigits = cnpj.replaceAll(/(\.|\/|-)/g, '').slice(-2)
    const stripedCNPJArr = cnpj.replaceAll(/(\.|\/|-)/g, '').slice(0, -2).split('')

    const firstDigit = calcDigit(stripedCNPJArr,firsMultiplicationNumbers)
    const secondDigit = calcDigit([...stripedCNPJArr, firstDigit],secondMultiplicationNumbers)
    console.log(firstDigit,secondDigit)
    if (lastTwoDigits[0] == firstDigit && lastTwoDigits[1] == secondDigit) {
        return true
    } else {
        return false
    }
}

function validateCPF(cpf){
    const firsMultiplicationNumbers = [10,9,8,7,6,5,4,3,2]
    const secondMultiplicationNumbers = [11, ...firsMultiplicationNumbers]
    
    const lastTwoDigits = cpf.replaceAll(/(\.|\/|-)/g, '').slice(-2)
    const stripedCPFArr = cpf.replaceAll(/(\.|\/|-)/g, '').slice(0, -2).split('')

    const firstDigit = calcDigit(stripedCPFArr,firsMultiplicationNumbers)
    const secondDigit = calcDigit([...stripedCPFArr, firstDigit],secondMultiplicationNumbers)
    console.log(firstDigit,secondDigit)
    if (lastTwoDigits[0] == firstDigit && lastTwoDigits[1] == secondDigit) {
        return true
    } else {
        return false
    }
}

function generateCNPJ(){
    const firsMultiplicationNumbers = [5,4,3,2,9,8,7,6,5,4,3,2]
    const secondMultiplicationNumbers = [6, ...firsMultiplicationNumbers]
    let cnpj = []

    for (let index = 0; index < 12; index++) {
        let newDigit = Math.floor(Math.random() * 10)
        cnpj.push(newDigit)
    }
    
    cnpj.push(calcDigit(cnpj,firsMultiplicationNumbers))
    cnpj.push(calcDigit(cnpj,secondMultiplicationNumbers))
    cnpj.splice(2, 0, '.')
    cnpj.splice(6, 0, '.')
    cnpj.splice(10, 0, '/')
    cnpj.splice(15, 0, '-')
    cnpj = cnpj.join("")

    return cnpj
}
console.log(generateCNPJ())