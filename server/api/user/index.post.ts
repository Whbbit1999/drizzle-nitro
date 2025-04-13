import { user } from "~~/db/schema"
import { db } from "~~/db"

defineRouteMeta({
  openAPI: {
    tags: ['user'],
    summary: 'Create user',
  }
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const [inserted] = await db.insert(user).values(body).returning()

  return {
    inserted
  }
})