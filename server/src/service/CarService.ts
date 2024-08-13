import { Car } from '../model';

class CarService {

    /*Insert entity into the database */

    async insert(payload: Car) {

        const {registration_date, model, type, registration_number, color, build_year, brand, username} = payload

        try {

            const newUser = await Car.create(
                {
                registration_date, 
                model, type, 
                registration_number, 
                color, 
                build_year, 
                brand, 
                username
            }
            );

            return newUser;
        }
        catch (error){
            console.log(error);
            return (error);
        }
    }

    /*
    Find by primary ID
    */

    async findByPk(id: number) {
        try {
            const foundUser = await Car.findByPk(id);

            if (foundUser) {
                return foundUser;

            } 
            else {
                console.log('ID not found')
                return null
            }

        }
        catch (error){
            console.log(error);
            return (error);
        }
    }

    async findAll() {
        try {
            const result = await Car.findAll();

            return result;
        }
        catch (error){
            console.log(error);
            return (error);
        }
    }

    /* 
    Update a record in the database
     */

    async updateByID(id:number, payload: Car) {

        const {registration_date, model, type, registration_number, color, build_year, brand, username} = payload

        try {
            //find the ID and update the entry

            const foundUser = await Car.findByPk(id);

            if (foundUser) {
                foundUser.set({registration_date, model, type, registration_number, color, build_year, brand, username});
                await foundUser.save();
            } 
            else {
                console.log('ID not found')
            }
            
        }
        catch (error){
            console.log(error);
            return (error);
        }
    }

    /* 
    Delete a record in the database
     */

    async deleteByID(id:number) {

        try {
            
            const foundUser = await Car.findByPk(id);

            if (foundUser) {
                await foundUser.destroy();
            } 
            else {
                console.log('ID not found')
            }
            
        }
        catch (error){
            console.log(error);
            return (error);
        }
    }
}

const carService = new CarService();

export { carService };

    // async function create() {
        
    // }

    // async function read() {

    // }

    // async function update() {

    // }

    // async function remove() {

    // }