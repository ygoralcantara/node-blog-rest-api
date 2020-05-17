export function success(data?: any): object {
  return {
    status: 'success',
    data: data || null,
  };
}

export function fail(data?: any): object {
  return {
    status: 'fail',
    data: data || null,
  };
}

export function error(message: string, data?: any): object {
  return {
    status: 'error',
    message,
    ...(data !== null ? data : null),
  };
}
