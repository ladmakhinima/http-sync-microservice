export function tryCatch(
  target: Object,
  key: string,
  propertyDescriptor?: TypedPropertyDescriptor<any>
) {
  const value = propertyDescriptor?.value;
  propertyDescriptor!.value = async function (...args: any) {
    try {
      return await value.apply(this, args);
    } catch (error: any) {
      if (error.message.startsWith("{") && error.message.endsWith("}")) {
        const detail = JSON.parse(error.message);
        args[1].status(detail.statusCode).json({ error: detail.message });
      }
    }
  };
  return propertyDescriptor;
}
