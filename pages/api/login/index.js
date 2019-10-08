const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({});
    return;
  }

  /*Selects the id and password where the username field is equal to the username
  submitted in the login form.*/
  const results = await query(sql`
    SELECT
      id,
      password
    FROM
      user
    WHERE
      username = ${req.body.username}
  `)

  if(results.error){
    throw results.error
  }

  /*Checks if any results have been returned*/
  if(results.length == 0){
    res.status(401).json({})
    return
  }

  /*Checks if the password matches the one stored in the database*/
  const password = await bcrypt.compare(req.body.password, results[0].password)

  if(password){
    var jwt = require('jsonwebtoken')
    var token = jwt.sign(results[0].id, process.env.JWT_SECRET)

    /*Sets the user cookie to equal the value of their access token*/
    res.json({
      token
    })
  }else{
    console.log("Wrong password")
    res.status(401).json({})
  }

}
