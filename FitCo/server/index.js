import express from 'express'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import gymRegistrationsRouter from './routes/gymRegistrations.js'

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectDirectory = path.resolve(currentDirectory, '..')
const distDirectory = path.join(projectDirectory, 'dist')
const indexFile = path.join(distDirectory, 'index.html')
const port = Number(process.env.PORT || 3001)

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.')
}

const app = express()

app.disable('x-powered-by')
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api', gymRegistrationsRouter)
app.use('/api', (_request, response) => {
  response.status(404).json({ error: 'API endpoint not found.' })
})

app.use(express.static(distDirectory))
app.get(/.*/, (_request, response) => {
  if (!existsSync(indexFile)) {
    return response.status(503).send('Frontend build is missing. Run "npm run build" first.')
  }

  return response.sendFile(indexFile)
})

app.use((error, _request, response, next) => {
  if (response.headersSent) {
    return next(error)
  }

  const status = Number.isInteger(error.status) ? error.status : 500
  if (status >= 500) {
    console.error(error)
  }

  const message =
    status === 413
      ? 'Request body is too large.'
      : status >= 500
        ? 'Unexpected server error.'
        : 'Request body contains invalid JSON.'

  return response.status(status).json({ error: message })
})

app.listen(port, () => {
  console.log(`FitCo Express server listening on http://localhost:${port}`)
})
