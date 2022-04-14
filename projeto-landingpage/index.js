let abrirMenu = () => {
    let elemento = document.getElementById('menu-nav')
    if (elemento.style.display === 'none') {
        elemento.style.display = 'flex'
    } else {
        elemento.style.display = 'none'
    }
}