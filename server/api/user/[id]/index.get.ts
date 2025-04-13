import { db } from "~~/db"

defineRouteMeta({
  openAPI: {
    tags: ['user'],
    summary: 'Get user by id',
  }
})

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const user = await db.query.user.findFirst({
    where(fields, operators) {
      return operators.eq(fields.id, +id);
    },
  })

  return {
    user
  }
})