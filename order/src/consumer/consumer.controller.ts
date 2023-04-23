import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { ConsumerService } from "./consumer.service";

@Service()
export class ConsumerController {
  @Inject()
  private consumerService: ConsumerService;

  serveEvent(request: Request, response: Response) {
    console.log(1111, request.body);
  }
}
