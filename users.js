import 'dotenv/config'
import { fql } from 'fauna'

const addUser = async (user, db) => {
    try {
        const result = await db.query(fql`
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
        const result = await db.query(fql`
            User.byId(${id})?.delete()
        `)
        return result   
    } catch (error) {
        console.log('Error: ', error)
    }
}

const getUserByEmail = async (email) => {
    try {
        const result = await db.query(fql`
            User.byEmail(${email})
        `)
        return result   
    } catch (error) {
        console.log('Error: ', error)
    }
}

const updateUser = async (id, user) => {
    try {
        const result = await db.query(fql`
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