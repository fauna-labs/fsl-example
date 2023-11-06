import 'dotenv/config'
import { Client, fql } from 'fauna'
const client = new Client({
    secret: process.env.FAUNA_SECRET_KEY
})

const addUser = async (user) => {
    try {
        const result = await client.query(fql`
            User.create({
                email: ${user.email},
                phone: ${user.phone},
                address: ${user.address},
            })
        `)
        return result   
    } catch (error) {
        console.log('Error: ', error)
    }
}

const removeUser = async (id) => {
    try {
        const result = await client.query(fql`
            User.byId(${id})?.delete()
        `)
        return result   
    } catch (error) {
        console.log('Error: ', error)
    }
}

const getUserByEmail = async (email) => {
    try {
        const result = await client.query(fql`
            User.byEmail(${email})
        `)
        return result   
    } catch (error) {
        console.log('Error: ', error)
    }
}

const updateUser = async (id, user) => {
    try {
        const result = await client.query(fql`
            User.byId(${id})?.update({
                email: ${user.email},
                phone: ${user.phone},
                address: ${user.address},
            })
        `)
        return result   
    } catch (error) {
        console.log('Error: ', error)
    }
}

export {
    addUser,
    removeUser,
    getUserByEmail,
    updateUser
}