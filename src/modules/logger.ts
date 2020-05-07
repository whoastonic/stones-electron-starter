import format from 'dateformat'

export const info = (input: string): void => log(input, 'info')

export const warn = (input: string): void => log(input, 'warn')

export const error = (input: string): void => log(input, 'error')

export const debug = (input: string): void => log(input, 'debug')

export const trace = (input: string): void => log(input)

export const log = (input: string, logType?: string): void => {
  const timestamp = Date.now()

  switch (logType) {
    case 'info':
      console.log(`[${formatTimestamp(timestamp)}] (INFO) | ${input}`)
      break
    case 'warn':
      console.log(`[${formatTimestamp(timestamp)}] (WARN) | ${input}`)
      break
    case 'error':
      console.log(`[${formatTimestamp(timestamp)}] (ERROR) | ${input}`)
      break
    case 'debug':
      console.log(`[${formatTimestamp(timestamp)}] (DEBUG) | ${input}`)
      break
    default:
      console.log(`[${formatTimestamp(timestamp)}] (TRACE) | ${input}`)
  }
}

const formatTimestamp = (timestamp: number): string => {
  return format(timestamp, 'h:MM:ss mm\\dd\\yyyy')
}
