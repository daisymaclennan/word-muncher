const sql = require('sql-template-strings')
const { query } = require('../../../lib/db')
const bcrypt = require('bcrypt')
const saltRounds = 10

export default async (req, res) => {
  if(req.method === 'POST'){
    /*Checks if the database contains any other entries with the same username or email address*/
    const exists = await query(sql`
      SELECT id FROM user
      WHERE
        username = ${req.body.username}
      OR
        email_address = ${req.body.email_address}
    `)

    /*Throws errors if there is any*/
    if(exists.length > 0){
      console.log('Username exists')
      res.status(409).json()
      /*Throw an error here when ready*/
    }else if(exists.error){
      throw exists.error
    }

    /*Hashes the password to improve security*/
    const password = await bcrypt.hash(req.body.password, saltRounds)

    /*Adds the user to the database*/
    const results = await query(sql`
      INSERT INTO user
        (username,
         email_address,
         password)
      VALUES
        (${req.body.username},
         ${req.body.email_address},
         ${password})
    `)

    if(results.error){
      throw results.error
    }

    res.json({})
  }else{
    res.status(401).json()
  }
}
