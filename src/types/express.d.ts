// @types/express.d.ts
import express from 'express';

import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

declare global {
  namespace Express {
    export interface Request {
      user: object; 
    }
  }
}



export interface jwtData extends JwtPayload  {
  userId: string;
  email: string;
  roleId: string;
  iat: number;
  exp: number


}

