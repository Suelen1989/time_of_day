function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    console.log(hora);
    msg.innerHTML = `Agora são ${hora} horas.`;
    
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = './images/manha.jpg';
        document.body.style.background = '#0357bf'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = './images/tarde.jpg';
        document.body.style.background = '#542915'
    } else {
        // Boa noite!
        img.src = './images/noite.jpg';
        document.body.style.background = '#112e63'
    }
}
