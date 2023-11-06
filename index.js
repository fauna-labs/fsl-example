import { addUser, getUserByEmail, removeUser, updateUser } from './users.js'

const user = {
    email: 'jon@email.com',
    phone: '555-555-5555',
    address: {
        street: '123 Fake St',
        city: 'Springfield',
        state: 'IL',
        zip: '90210'
    }
}

async function App() {
    const result = await addUser(user)
    console.log(result)

    // const result2 = await getUserByEmail(user.email)
    // console.log(result2.data.data)

    // const result3 = await removeUser(result2.data.data[0].id)
    // console.log(result3)

    const result4 = await updateUser(result.data.id, {
        ...user,
        email: 'newemail@email.com',
    })
    console.log(result4)
}

App()

