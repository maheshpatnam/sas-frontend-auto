
export class Utils {

    constructor() { }

    /**
     * Generates random username
     * @returns random username
     */
    randomUserName(): string {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        return testname;
    }

    /**
    * Generates random emailid
    * @returns random emailid
    */
    randomEmailId(): string {
        const testEmail = this.randomUserName() + "@gmail.com"
        return testEmail;
    }

    /**
     * The implementation selects the initial input to the random number generation algorithm
     * @param max 
     * @returns random number based on user input
     */
    getRandomNumber(max: number) {
        return Math.floor(Math.random() * max);
    }
}
