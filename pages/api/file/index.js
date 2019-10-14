const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')

export default async (req, res) => {
  if(req.method !== 'GET'){
    res.status(405).json({})
  }

  const results = await query(sql`
    SELECT * FROM post
  `)
  console.log(results)
  res.json(results)
}
