import { app, BrowserWindow } from 'electron'

import { join } from 'path'

const {
  PUBLIC_URL,
  PUBLIC_PORT
} = process.env

const PORT = PUBLIC_PORT ?? '8080'
const URL = PUBLIC_URL ?? 'http://localhost'

let win: Electron.BrowserWindow | null

const window = (): void => {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  process.env.NODE_ENV === 'production'
    ? win.loadFile(join(__dirname, '../dist/index.html'))
      .catch((err) => console.log('cannot load file:', err))
    : win.loadURL(`${URL}:${PORT}`)
      .catch((err) => console.log('cannot load url:', err))

  if (process.env.NODE_ENV !== 'production') {
    win.webContents.openDevTools()
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', window)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    window()
  }
})
