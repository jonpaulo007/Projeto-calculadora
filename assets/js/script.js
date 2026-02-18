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