function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Erro! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade >= 10 && idade <21) {
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade >= 10 && idade <21) {
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}