import { Request, Response, NextFunction } from "express";

async function guest(req: Request, res: Response, next: NextFunction) : Promise<void | Response> {
    //check if api key corresponds to guest and admin
    //if the role is not added from the previous middleware then it doesn't exist in the cache
    if (!req.role?.includes('guest') && !req.role?.includes('admin')) {
        return res.status(401).send({
            error: "Access denied"
        })
    }

    next();
}

async function admin(req: Request, res: Response, next: NextFunction) : Promise<void | Response> {
    //check if api key corresponds to admin

    if (!req.role?.includes('admin')) {
        return res.status(401).send({
            error: "Access denied"
        })
    }
    next();
}

export { guest, admin };