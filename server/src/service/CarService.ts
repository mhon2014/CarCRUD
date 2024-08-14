import { Car } from '../model';

class CarService {

    /*
    Insert entity into the database 
    returns the entry if succesfully inserted
    */

    async insert(payload: Car): Promise<Car> {

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
            return Promise.reject(error);
        }
    }

    /*
    Find by primary ID
    returns the result if found
    */

    async findByPk(id: number) : Promise<Car> {
        try {
            const result = await Car.findByPk(id);

            if (result) {
                return result;

            } 
            else {
                console.log('ID not found')
                return Promise.reject(null);
            }

        }
        catch (error){
            console.log(error);
            return Promise.reject(error);
        }
    }

    async findAll():Promise<Car[]> {
        try {
            const result = await Car.findAll();

            return result;
        }
        catch (error){
            console.log(error);
            return Promise.reject(error);
        }
    }

    /* 
    Update a record in the database
    returns the updated instance
     */

    async updateByID(id:number, payload: Car) : Promise<Car> {

        const {registration_date, model, type, registration_number, color, build_year, brand, username} = payload;

        try {
            //find the ID and update the entry
            const foundUser = await Car.findByPk(id);

            if (foundUser) {
                foundUser.set({registration_date, model, type, registration_number, color, build_year, brand, username});
                await foundUser.save();
                return foundUser;
            } 
            else {
                console.log('ID not found');
                return Promise.reject(null);
            }
            
        }
        catch (error){
            console.log(error);
            return Promise.reject(error);
        }
    }

    /* 
    Delete a record in the database
    Returns true if succesful
     */

    async deleteByID(id:number): Promise<boolean> {

        try {
            
            const foundUser = await Car.findByPk(id);

            if (foundUser) {
                await foundUser.destroy();
                return true;
            } 
            else {
                console.log('ID not found')
                return false;
            }
            
        }
        catch (error){
            console.log(error);
            return Promise.reject(error);
        }
    }
}

const carService = new CarService();

export { carService };
