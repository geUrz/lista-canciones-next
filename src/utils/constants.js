export const ENV = {
  SERVER_HOST: 'http://localhost:1337',
  API_URL: 'http://localhost:1337/api',
  /* SERVER_HOST: 'https://lista-canciones-strapi.onrender.com',
  API_URL: 'https://lista-canciones-strapi.onrender.com/api', */
  ENDPOINTS: {
    AUTH: {
      REGISTER: 'auth/local/register',
      LOGIN: 'auth/local'
    },
    USERS_ME: 'users/me',
    LISTSONG: 'listsongs',
  },
  TOKEN: 'token'
}