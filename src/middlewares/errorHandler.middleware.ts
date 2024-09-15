import { APIError } from '../helpers/APIErrors';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
    err: APIError, 
    req: Request, 
    res: Response, 
    next: NextFunction
): void => {
    res.status(err.statusCode || 500).json({
        status: err.statusText || "Internal Server Error",
        message: err.message,
        statusCode: err.statusCode || 500,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};

export const notFound = (
    req: Request, 
    res: Response, 
    next: NextFunction
): void => {
    next(new APIError(`Route not found: ${req.originalUrl}`, 404));
};