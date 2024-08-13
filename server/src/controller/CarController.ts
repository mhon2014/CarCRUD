import { Car } from '@model';
import { carService } from '../service';
import { Request, Response } from 'express';

class CarController {

    async create(req: Request, res: Response) {
        //TODO
        //validate data before creation

        try {
            const payload: Car = req.body;
            const newUser = await carService.insert(payload);
            res.status(201).send(newUser);
        }
        catch (error) {
            console.log(error)
            res.status(400);
        }

    }

    async getAll(req: Request, res: Response) {
        try {

            const result = await carService.findAll();
            res.status(200).send(result);
        }
        catch (error) {
            console.log(error)
            res.status(400);
        }
    }

    async getById(req: Request, res: Response) {

        try {

            const id = parseInt(req.params.id as string);
            console.log(id);

            const result = await carService.findByPk(id);
            if (result) {
                res.status(200).send(result);
            }
            else {
                res.status(404).send('Not found');

            }
        }
        catch (error) {
            res.status(500);
        }
        // return res.status(200).send(result);
    }

    async update(req: Request, res: Response) {

        try {

            const id = req.body.id;
            const payload = req.body;
            console.log(id);

            const result = await carService.updateByID(id, payload);
            if (result) {
                res.status(200).send(result);
            }
            else {
                res.status(404).send('Error');

            }
        }
        catch (error) {
            console.log(error);
            res.status(500)
        }

    }

    async delete(req: Request, res: Response) {

        try {
            const id = req.body.id;
            const result = await carService.deleteByID(id);

            if (result) {
                res.status(200).send(result);
            }
            else {
                res.status(404).send('Error');
            }
        }
        catch (error) {
            console.log(error);
            res.status(500)
        }


    }
}

const carController = new CarController();

export { carController };