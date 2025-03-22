import Fastify from 'fastify'
import fs from 'fs/promises'
import path from 'path'

// Create Fastify instance
const fastify = Fastify({
  logger: true
})

// Define the type for our profile data
interface ProfileData {
  username: string
  email: string
  qrLink: string
  profileImage: string
  imageX: number
  imageY: number
  imageScale: number
  imageRotation: number
}

// Register a route to handle profile data
fastify.post('/api/profile', async (request, reply) => {
  try {
    const data = request.body as ProfileData
    
    // Create a timestamp for unique file naming
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `profile-${timestamp}.json`
    
    // Ensure the data directory exists
    const dataDir = path.join(path.resolve(), 'data')
    await fs.mkdir(dataDir, { recursive: true })
    
    // Save the profile data
    await fs.writeFile(
      path.join(dataDir, filename),
      JSON.stringify(data, null, 2)
    )

    return { success: true, filename }
  } catch (error) {
    fastify.log.error(error)
    return reply.status(500).send({ error: 'Failed to save profile data' })
  }
})

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3001 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start() 