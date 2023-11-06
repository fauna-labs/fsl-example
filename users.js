import { Client, fql } from 'fauna'

const addUser = async (user) => {
    const client = new Client({
        secret: process.env.FAUNADB_SECRET_KEY
    })
    
    const result = await client.query(fql`
        User.create({
            email: ${user.email},
            phone: ${user.phone},
            address: ${user.address},
        })
    `)
    
    return result
}

export {
    addUser
}