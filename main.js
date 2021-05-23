const { app, BrowserWindow } = require("electron");

require('electron-reload')(__dirname,{
    require:(`${__dirname}/node_modules/electron`)
})
function createServer(){
    const tela = new BrowserWindow({
        icon: 'img/icone.png',
        width:1050,
        height:600,
        // frame:false,
        // resizable:true,
        fullscreen:true,
    })
    tela.loadFile('index.html')

}
    app.whenReady().then(createServer);