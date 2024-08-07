const { log } = require('console');
const { app, BrowserWindow, globalShortcut, ipcMain, Menu } = require('electron');
const { mkdirSync } = require('fs');
const path = require('path');
const { save, load } = require('./js/functions');





try {
    mkdirSync("./scripts");
} catch (error) {

}






function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('front/index.html');

    const menuTemplate = [{
            label: 'Archivo',
            submenu: [{
                    label: 'Nuevo',
                    click() {
                        console.log('Nuevo clickeado');
                    }
                },
                {
                    label: 'Abrir',
                    click() {
                        console.log('Abrir clickeado');
                    }
                },
                {
                    label: 'Rename',
                    click() {
                        console.log('Abrir clickeado');
                    }
                },
                {
                    label: 'Guardar',
                    click() {
                        console.log('Abrir clickeado');
                    }
                },
                { type: 'separator' },
                {
                    label: 'Salir',
                    role: 'quit'
                }
            ]
        },
        {
            label: 'Opciones',
            submenu: [{
                label: 'Consola',
                accelerator: 'Ctrl+I', // Atajo de teclado

                click() {
                    mainWindow.webContents.toggleDevTools();
                }
            }]
        }
    ];

    const menu = Menu.buildFromTemplate(menuTemplate);
    // Establece el menú de la aplicación
    Menu.setApplicationMenu(menu);



    globalShortcut.register('Ctrl+I', () => {
        mainWindow.webContents.toggleDevTools();
    });
    globalShortcut.register('F5', () => {
        mainWindow.webContents.reload();
    });
    globalShortcut.register('Ctrl+S', () => {
        mainWindow.webContents.send('bc-save', '');
    });


}

app.whenReady().then(() => {
    createWindow();



    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});





ipcMain.on('save', (e, data) => {
    const resp = save(data)
    e.sender.send('resp-save', resp);

})

ipcMain.on('load', (e, data) => {
    // e.sender.send('resp-save', 'Respuesta desde el main process');
    const resp = load(data)
    e.sender.send('resp-load', resp);
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});