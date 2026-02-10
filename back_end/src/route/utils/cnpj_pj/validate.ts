const validationCNPJ_PJ = (dates : string) : boolean => {

    dates = dates.replace(/\D/g,'') //Remove os caracteres e verifica se há inconsistência nos valores

    if(dates.length !== 14) return false//Se faltar numeros para a execução
    if(/^(\d)\1+$/.test(dates)) return false //Não deixa passar numeros repetidos, caso se repitam dará inválido

    function toGenerateHeft(size : number) : number[] {
        //size é o total do valor digitado
        const hefts : number[] = []
        let heft = size - 7

        for(let count = 0; count < size; count++){
            hefts.push(heft)
            heft--

            if(heft < 2){heft = 9}
        }

        return hefts
    }

    const calculate = (base : string) =>{
        const hefts = toGenerateHeft(base.length)//Aqui está o size
        let sum = 0

        for(let count = 0; count < hefts.length; count++){
            sum += parseInt(base[count]) * hefts[count]
        }

        const rest = sum % 11 //Divide para obter o resto
        return rest < 2 ? 0 : 11 - rest //Se o resto for maior que 2 então vai subtrair 11 pelo rest
    }

        const base_dates = dates.slice(0,12)

        const digit1 = calculate(base_dates)
        const digit2 = calculate(base_dates + digit1)

        return dates === base_dates + digit1.toLocaleString() + digit2.toLocaleString() //Ocorre a validação do resultado final
}

export {validationCNPJ_PJ}