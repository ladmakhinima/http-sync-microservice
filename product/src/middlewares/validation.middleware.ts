import { plainToClass, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export const validatorMiddleware =
  <T>(dto: new () => T) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const transformedClass = plainToInstance(dto, request.body);
    const errors = await validate(transformedClass as any);
    if (errors.length > 0) {
      return response.status(400).json({
        message: "badrequest exception",
        errors: errors.reduce((errors: any, er: any) => {
          errors[er.property] = Object.values(er.constraints as any);
          return errors;
        }, {}),
      });
    }
    return next();
  };
