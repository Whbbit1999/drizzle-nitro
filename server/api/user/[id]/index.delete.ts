import { user } from "~~/db/schema"
import { db } from "~~/db"
import { eq } from "drizzle-orm"

defineRouteMeta({
  openAPI: {
    tags: ['user'],
    summary: 'Delete user by id',
  }
})

export default defineEventHandler(async (event) => {
  const id = await getRouterParam(event, 'id')

  if (!id) {
    throw createError({ statusCode: 400, message: 'id is required' })
  }

  const result = await db.delete(user).where(eq(user.id, +id))
  return {
    result
  }
})