import { Request, Response, Router } from "express";
import addToQueue from "./queue";

const services: string[] = [
  "http://localhost:4000",
  "http://localhost:5000",
  "http://localhost:6000",
];

interface PublishedEvent {
  event: string;
  payload: any;
  producerURL: string;
}

const router = Router();

router.post("/publish", function (request: Request, response: Response) {
  const payload = request.body as PublishedEvent;
  Promise.all(services.map((service) => addToQueue({ service, payload })));
  return response.status(200).json({ message: "send successfully ..." });
});

export default router;
