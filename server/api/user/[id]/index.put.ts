import { user } from "~~/db/schema"
import { db } from "~~/db"
import { eq } from "drizzle-orm"

defineRouteMeta({
  openAPI: {
    tags: ['user'],
    summary: 'Update user',
  }
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, message: 'id is required' })
  }

  const [inserted] = await db.update(user).set(body).where(eq(user.id, +id)).returning()

  return {
    inserted
  }
})