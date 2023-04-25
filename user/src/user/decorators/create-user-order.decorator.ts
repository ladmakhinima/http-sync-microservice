import axios from "axios";
import { BaseEventModel } from "../../models/base-event.model";

export function createUserOrder(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any) {
    const result = await originalMethod.apply(this, args);
    const payload: BaseEventModel = {
      event: "create_user",
      payload: {
        userId: result._id,
        credit: result.credit,
      },
    };
    await axios.post("http://localhost:7000/publish", payload);
    return result;
  };

  return descriptor;
}
