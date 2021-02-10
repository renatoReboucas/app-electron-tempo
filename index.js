const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  globalShortcut,
  nativeImage,
  Menu
} = require("electron");

let top = {};
let appIcon = null
app.on("ready", () => {

  appIcon = new Tray(__dirname + "/app/img/nublado.png");
  // top.tray = new Tray(nativeImage.createEmpty());
   const contextMenu = Menu.buildFromTemplate([
     { label: "Sobre", type: "radio" },
     { label: "Sair", type: "radio", click: () => {ipcMain.emit("fechar-janela-sobre");} },
   ]);
  //  contextMenu.items[0].checked = false;
   appIcon.setContextMenu(contextMenu);

   

    // sobreWindow.loadURL(`file://${__dirname}/app/index.html`);
    // sobreWindow.webContents.openDevTools()

  });
  ipcMain.on("fechar-janela-sobre", () => {
    console.log('fechar');
    sobreWindow.close();
  });


let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  sobreWindow = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: false,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
    },

  });
  // evita de deletar a variavel sobreWindow
  sobreWindow.on("closed", () => {
    sobreWindow = null;
  });
  sobreWindow.loadURL(`file://${__dirname}/app/index.html`);
})




