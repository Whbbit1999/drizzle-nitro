import { db } from "../../../db"

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