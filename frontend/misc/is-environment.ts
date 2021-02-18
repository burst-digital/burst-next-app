export function isClient() {
  return typeof window !== 'undefined';
}

export function isServer() {
  return typeof window === 'undefined';
}

export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

export function isTest() {
  return process.env.NODE_ENV === 'test';
}

export function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}
