import { Injectable, NestMiddleware} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


@Injectable()
export class InfoMiddleware implements NestMiddleware {
    use(req:Request,res:Response,next:NextFunction){
        console.log('Petición intermedia');
        next();
    }
}