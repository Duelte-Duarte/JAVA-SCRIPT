function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // console.log('Bom dia!')
        img.src = 'imagem/manha.png'
        document.body.style.background = '#ffe5ab'
    } else if (hora >= 12 && hora < 18) {
        // console.log('Boa tarde!')
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#cce87a'
    } else {
        // console.log('Boa noite!')
        img.src = 'imagem/noite.png'
        document.body.style.background = '#152c3e'
    }
}