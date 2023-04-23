export const error = (message: string, statusCode: number) =>
  JSON.stringify({
    message,
    statusCode,
  });
