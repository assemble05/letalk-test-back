export class AppError {
  statusCode: number;
  message: string;
  constructor(statusCode = 400, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
