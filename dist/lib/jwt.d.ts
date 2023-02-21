import Jwt from "jsonwebtoken";
export declare const sign: (payload: any) => string;
export declare const verify: (token: any) => string | Jwt.JwtPayload;
