import { BaseEventModel } from "../models/base-event.model";
import axios from "axios";

export function createProductOrder(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any) {
    console.log("ho");
    const result = await originalMethod.apply(this, args);
    const payload: BaseEventModel = {
      event: "create_product",
      payload: {
        productId: result._id,
        productQuantity: result.quantity,
        productPrice: result.price,
      },
    };
    await axios.post("http://localhost:7000/publish", payload);
    return result;
  };

  return descriptor;
}
