export const env = {
  PROD: import.meta.env.PROD,
  DEV: import.meta.env.DEV,
  MODE: import.meta.env.MODE,
  SOCKET_URL: import.meta.env.VITE_SOCKET_URL as string | undefined,
  OPEN_AI_KEY: import.meta.env.VITE_OPEN_AI_KEY as string | undefined,
};
