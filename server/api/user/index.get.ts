import { db } from "../../../db"

export default defineEventHandler(async (event) => {
  const user = await db.query.user.findMany()

  return {
    user
  }
})