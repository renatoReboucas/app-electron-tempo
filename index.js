const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  globalShortcut,
} = require("electron");

let mainWindow = null;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });


  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.webContents.openDevTools()

});

app.on("window-all-closed", () => {
  app.quit();
});



