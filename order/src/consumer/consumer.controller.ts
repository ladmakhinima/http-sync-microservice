import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { ConsumerService } from "./consumer.service";
import { BaseEventModel } from "../models/base-event.model";

@Service()
export class ConsumerController {
  @Inject()
  private consumerService: ConsumerService;

  serveEvent(request: Request, response: Response) {
    this.consumerService.handleServeEvent(request.body as BaseEventModel);
  }
}
