import faker from "faker"
// you need to install type declaration file as it shows could not find type declaration file available.
// note if a particular type declaration file is not included in the package definition then it should be installed manually. otherwise it will give an error message.

export class User{
    name: string; 
    loc: {
        lat: number;
        long: number;
    }; 
    constructor () {
        this.name = faker.name.firstName()
        this.lat= faker.
    }
}
const user = new User();
console.log(user.name); 