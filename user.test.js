import 'dotenv/config'
import { Client, fql } from 'fauna'
import { addUser } from './users.js'


console.log('Test =>', process.env.FAUNA_SECRET_KEY)

// Initialize the Fauna client
const client = new Client({
    secret: process.env.FAUNA_SECRET_KEY
})

let testDb;

beforeAll(async () => {
    const response = await client.query(fql`
        Key.create({
            role: 'server',
            database: 'testd'
        })
    `)
    testDb = new Client({
        secret: response.data.secret
    })
});

afterAll(async () => {
    // Cleanup tasks after all tests are run, if necessary
});

describe('User operations', () => {
    it('should create a new user', async () => {
        const user = {
            email: 'test@example.com',
            phone: '1234567890',
            address: '123 Test St'
        }
        const result = await addUser(user, testDb);
        expect(result).toBeDefined();
        // verify that the user was created
        const userByEmail = await client.query(fql`
            User.where(.email == ${user.email}).first()
        `)
        expect(userByEmail).toBeDefined();
        expect(userByEmail.data.email).toEqual(user.email);
    });

    // Add more tests here
});

