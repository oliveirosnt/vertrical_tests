import { ALREADY_INSERTED_USER } from "../constants/apiUsers/AlreadyInsertedUser"
import { TEST_USER } from "../constants/apiUsers/TestUser"
import { MAIN_ENDPOINT, USER_1_ENDPOINT } from "../constants/Miscellaneous"


describe('Backend automation scenarious', () => {

    it('GET existent test', () => {
        cy.request('GET', USER_1_ENDPOINT).then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(ALREADY_INSERTED_USER.name);
            expect(response.body.username).to.eq(ALREADY_INSERTED_USER.username);
            expect(response.body.email).to.eq(ALREADY_INSERTED_USER.email);
            expect(response.body.address.street).to.eq(ALREADY_INSERTED_USER.address.street);
            expect(response.body.address.suite).to.eq(ALREADY_INSERTED_USER.address.suite);
            expect(response.body.address.city).to.eq(ALREADY_INSERTED_USER.address.city);
            expect(response.body.address.zipcode).to.eq(ALREADY_INSERTED_USER.address.zipcode);
            expect(response.body.address.geo.lat).to.eq(ALREADY_INSERTED_USER.address.geo.lat);
            expect(response.body.address.geo.lng).to.eq(ALREADY_INSERTED_USER.address.geo.lng);
            expect(response.body.phone).to.eq(ALREADY_INSERTED_USER.phone);
            expect(response.body.website).to.eq(ALREADY_INSERTED_USER.website);
            expect(response.body.company.name).to.eq(ALREADY_INSERTED_USER.company.name);
            expect(response.body.company.catchPhrase).to.eq(ALREADY_INSERTED_USER.company.catchPhrase);
            expect(response.body.company.bs).to.eq(ALREADY_INSERTED_USER.company.bs);
        })
    })

    it('GET inexistent user test', () => {
        cy.request({url: 'https://jsonplaceholder.typicode.com/users/30/', failOnStatusCode: false})
            .its('status')
            .should('equal', 404)
    })

    it('POST test', () => {
        cy.request('POST', MAIN_ENDPOINT, TEST_USER).then( (response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(TEST_USER.name)
            expect(response.body.username).to.eq(TEST_USER.username)
            expect(response.body.email).to.eq(TEST_USER.email)
            expect(response.body.address.street).to.eq(TEST_USER.address.street)
            expect(response.body.address.suite).to.eq(TEST_USER.address.suite)
            expect(response.body.address.city).to.eq(TEST_USER.address.city)
            expect(response.body.address.zipcode).to.eq(TEST_USER.address.zipcode)
            expect(response.body.address.geo.lat).to.eq(TEST_USER.address.geo.lat)
            expect(response.body.address.geo.lng).to.eq(TEST_USER.address.geo.lng)
            expect(response.body.phone).to.eq(TEST_USER.phone)
            expect(response.body.website).to.eq(TEST_USER.website)
            expect(response.body.company.name).to.eq(TEST_USER.company.name)
            expect(response.body.company.catchPhrase).to.eq(TEST_USER.company.catchPhrase)
            expect(response.body.company.bs).to.eq(TEST_USER.company.bs)
        })
    })
    
    it('PUT test', () => {
        cy.request('PUT', USER_1_ENDPOINT, TEST_USER).then( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(TEST_USER.name);
            expect(response.body.username).to.eq(TEST_USER.username);
            expect(response.body.email).to.eq(TEST_USER.email);
            expect(response.body.address.street).to.eq(TEST_USER.address.street);
            expect(response.body.address.suite).to.eq(TEST_USER.address.suite);
            expect(response.body.address.city).to.eq(TEST_USER.address.city);
            expect(response.body.address.zipcode).to.eq(TEST_USER.address.zipcode);
            expect(response.body.address.geo.lat).to.eq(TEST_USER.address.geo.lat);
            expect(response.body.address.geo.lng).to.eq(TEST_USER.address.geo.lng);
            expect(response.body.phone).to.eq(TEST_USER.phone);
            expect(response.body.website).to.eq(TEST_USER.website);
            expect(response.body.company.name).to.eq(TEST_USER.company.name);
            expect(response.body.company.catchPhrase).to.eq(TEST_USER.company.catchPhrase);
            expect(response.body.company.bs).to.eq(TEST_USER.company.bs);
        })
    })

    it('DELETE test', () => {
        cy.request('DELETE', USER_1_ENDPOINT).then( (response) => {
            expect(response.status).to.eq(200);
        })
    })

})