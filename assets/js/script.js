// modo dark/light
function toggleTheme(){
    const body = document.body
    const button = document.querySelector('.theme-btn')

    body.classList.toggle('light')

    if(body.classList.contains('light')){
        button.innerHTML = '☀️ Modo Claro'
    } else {
        button.innerHTML = '🌙 Modo Escuro'
    }
}

// logica calculadora
const limite = 12

function calcular(tipo, valor){

    const display = document.getElementById('resultado')
    let valorAtual = display.value

    if(tipo === 'acao'){
        // zera o display
        if(valor === 'c'){
            display.value = ''
            return
        }

        // faz a verificação dos operadores e previne finalizar com um operador
        if(valor === '='){

            const ultimoChar = valorAtual.slice(-1)

            // Se estiver vazio, não faz nada
            if(valorAtual === ''){
                return
            }

            // Se terminar com operador, não calcula
            if(['+', '-', '*', '/', '.'].includes(ultimoChar)){
                return
            }

            try{
                display.value = eval(valorAtual)
            } catch(e){
                return
            }

            return
        }

        // apaga o ultimo numero digitado
        if(valor === 'back'){
            display.value = valorAtual.slice(0, -1)
            return
        }


        // operadores
        if(['+', '-', '*', '/', '.'].includes(valor)){

            // Não deixar começar com operador
            if(valorAtual === ''){
                return
            }

            const ultimoChar = valorAtual.slice(-1)

            // Evita operador duplicado
            if(['+', '-', '*', '/', '.'].includes(ultimoChar)){
                return
            }

            display.value += valor
        }


    } else if(tipo === 'valor'){
        // define a quantidade de numeros no display
        if(valorAtual.length >= limite){
            return
        }

        display.value += valor
    }
}



/*function calcular(tipo, valor){
    
    if (tipo === 'acao'){
        if (valor === 'c'){
            document.getElementById('resultado').value = ''
        } 

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        if (valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            
            document.getElementById('resultado').value = valor_campo
        }
    } else if (tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}*/