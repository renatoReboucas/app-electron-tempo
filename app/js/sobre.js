const { ipcRenderer, shell } = require("electron");

const close = document.querySelector("#btn-close");
const linkTwitter = document.querySelector("#link-twitter");
const linkGit = document.querySelector("#github");

window.onload = function () {
};

close.addEventListener("click", function () {
  ipcRenderer.send("fechar-janela-sobre");
});

linkGit.addEventListener("click", () => {
  shell.openExternal("https://github.com/renatoReboucas/app-electron-tempo");
})

linkTwitter.addEventListener("click", function () {
  shell.openExternal("https://twitter.com/https_zero6");
});