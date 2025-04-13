import { db } from "~~/db"

defineRouteMeta({
  openAPI: {
    tags: ['user'],
    summary: 'Get all users',
  }
})

export default defineEventHandler(async (event) => {
  const user = await db.query.user.findMany()

  return {
    user
  }
})