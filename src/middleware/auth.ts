// import { Request, Response, NextFunction } from "express";

// import {verify} from "jsonwebtoken";
// import User from "../models/User";

// export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers['authorization'];
//     if(!token) return res.status(403).json({message: 'No Token'});


//     const jwt = verify(token, process.env.JWT_SECRET as string, async (err, decoded: any) => {
//         if (err) return res.status(401).json({ message: 'Unauthorized' });
           
//         req.userId = decoded.id_user;
//         next();
//     });

//     return 


    


// };
