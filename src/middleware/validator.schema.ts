import { Request, Response, NextFunction } from "express";
import { ZodError, z } from "zod";

export const validateSchema =
  (schema: z.ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next();
    } catch (error) {
        if(error instanceof ZodError){
            res.status(400).json({
                message: "Validation Failed",
                errors: error.errors.map((err)=>({
                    message: err.message,
                    path: err.path
                }))
            })
        }
   
    }
  };
