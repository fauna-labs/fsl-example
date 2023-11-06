import 'dotenv/config'
import { Client, fql } from 'fauna'
import { addUser } from './users.js'

// Initialize the Fauna client
const client = new Client({
    secret: process.env.FAUNA_SECRET_KEY
})

beforeAll(async () => {
    // Optionally, you can perform setup tasks here, such as creating necessary collections or indexes in your FaunaDB
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
        const result = await addUser(user);
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

