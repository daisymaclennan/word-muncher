const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({});
    return;
  }

  /*Selects the id and password where the username field is equal to the username submitted in the login form.
  const results = await query(sql`
    SELECT id, password FROM user WHERE username = ${req.body.username}
  `)
}
