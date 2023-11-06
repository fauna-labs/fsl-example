import { addUser } from './users.js'

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

addUser(user)

