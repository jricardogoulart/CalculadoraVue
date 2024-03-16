const { createApp } = Vue

createApp({
    data(){
        return{
            display: '0', // o valor que será mostrado na tela da calculadora
            numeroAtual: null, // o número que está sendo digitado pelo usuário
            numeroAnterior: null, // o número que foi digitado antes da operação
            operador: null // a operação que foi escolhida pelo usuário
        }
    },
    methods:{
        lidarBotao(botao){
            switch(botao){
                case "*":
                case "-":
                case "+":
                case "/":
                    this.lidarOperador(botao) // se o botão for um operador, chama a função lidarOperador
                break
                case ".":
                    this.lidarDecimal() // se o botão for um ponto, chama a função lidarDecimal
                break
                case "=":
                    this.lidarIgual() // se o botão for um igual, chama a função lidarIgual
                break
                case "AC":
                    this.lidarClear() // se o botão for um AC, chama a função lidarClear
                break
                default:
                    this.lidarNumero(botao) // se o botão for um número, chama a função lidarNumero
            }
        },
        lidarOperador(operador){
            if(this.numeroAnterior === null){ // se não há número anterior, guarda o número atual como número anterior
                this.numeroAnterior = this.numeroAtual
            }else{ // se já há número anterior, faz a operação com o número atual e guarda o resultado como número anterior
                this.numeroAnterior = this.calcular()
            }
            this.operador = operador // guarda o operador escolhido
            this.numeroAtual = null // limpa o número atual
            this.display = this.numeroAnterior // mostra o número anterior na tela
        },
        lidarDecimal(){
            if(this.numeroAtual === null){ // se não há número atual, inicia com zero e ponto
                this.numeroAtual = '0.'
            }else if(!this.numeroAtual.includes('.')){ // se há número atual e não tem ponto, adiciona um ponto
                this.numeroAtual += '.'
            }
            this.display = this.numeroAtual // mostra o número atual na tela
        },
        lidarIgual(){
            if(this.numeroAnterior !== null && this.numeroAtual !== null && this.operador !== null){ // se há número anterior, número atual e operador, faz a operação e mostra o resultado na tela
                this.numeroAtual = this.calcular()
                this.display = this.numeroAtual
                this.numeroAnterior = null // limpa o número anterior
                this.operador = null // limpa o operador
            }
        },
        lidarClear(){
            this.display = '0' // mostra zero na tela
            this.numeroAtual = null // limpa o número atual
            this.numeroAnterior = null // limpa o número anterior
            this.operador = null // limpa o operador
        },
        lidarNumero(numero){
            if(this.numeroAtual === null){ // se não há número atual, inicia com o número digitado
                this.numeroAtual = numero
            }else{ // se há número atual, concatena o número digitado
                this.numeroAtual += numero
            }
            this.display = this.numeroAtual // mostra o número atual na tela
        },
        calcular(){
            let resultado = 0 // variável para guardar o resultado da operação
            switch(this.operador){ // verifica qual operador foi escolhido e faz a operação correspondente
                case "+":
                    resultado = Number(this.numeroAnterior) + Number(this.numeroAtual)
                break
                case "-":
                    resultado = Number(this.numeroAnterior) - Number(this.numeroAtual)
                break
                case "*":
                    resultado = Number(this.numeroAnterior) * Number(this.numeroAtual)
                break
                case "/":
                    resultado = Number(this.numeroAnterior) / Number(this.numeroAtual)
                break
            }
            return resultado // retorna o resultado da operação
        }
    }
}).mount("#app")