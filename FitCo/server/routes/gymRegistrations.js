import { Router } from 'express'

const router = Router()
const fieldLimits = {
  gym_name: 120,
  owner_name: 120,
  address: 500,
  phone: 30,
  email: 254,
}
const requiredFields = Object.keys(fieldLimits)

router.post('/gym-registrations', (request, response) => {
  const body = request.body

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return response.status(400).json({ error: 'Please submit a valid registration form.' })
  }

  const values = {}
  const errors = []

  for (const field of requiredFields) {
    const value = body[field]

    if (typeof value !== 'string' || value.trim().length === 0) {
      errors.push(`${field} is required.`)
      continue
    }

    const normalized = value.trim()
    if (normalized.length > fieldLimits[field]) {
      errors.push(`${field} must be ${fieldLimits[field]} characters or fewer.`)
      continue
    }

    values[field] = normalized
  }

  if (errors.length > 0) {
    return response.status(400).json({ error: errors.join(' ') })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return response.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (!/^[\d+().\-\s]+$/.test(values.phone) || values.phone.replace(/\D/g, '').length < 7) {
    return response.status(400).json({ error: 'Please enter a valid phone number.' })
  }

  return response.status(503).json({
    error: 'Gym registration storage is not configured yet. Your details have not been saved.',
  })
})

export default router
