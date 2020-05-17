class AppError extends Error {
  status: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'AppError';
    this.status = status;
  }
}

export default AppError;
