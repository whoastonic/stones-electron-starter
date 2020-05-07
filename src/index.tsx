import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './app'

import * as logger from './modules/logger'

logger.info('logging from file...')

const application = document.getElementById('root')

ReactDOM.render(<App/>, application)
