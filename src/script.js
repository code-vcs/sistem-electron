document.querySelector('.fa-power-off').addEventListener('click', () => {
    close();
})
// carregando imagem
window.addEventListener('load', () => {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(this.files[0])
        }
    })
})
//  Webcam
function startLoadWeb() {
    const space = { video: { width: 525, height: 390 } };
    navigator.mediaDevices.getUserMedia(space)
        .then(stream => {
            const meuVideo = document.querySelector('#video')
            meuVideo.srcObject = stream;
        }).catch(err => { console.log("Erro ", err) })

}
window.addEventListener('load', startLoadWeb);  //  WEBCAM JÁ ATIVA
//  TIRANDO FOTO CLOM A WEBCAM   (  IMAGEM COLOCANDLO NO CANVA CORBO BODY HTML )
document.querySelector('#btCapt').addEventListener('click', () => {
let tempo = document.querySelector('#temporizador')
    setTimeout(() => {
        let foto = document.querySelector('#foto');
        
        var canvas = document.querySelector("#canvas");
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0,);
        
    }, tempo.value);
    
})

