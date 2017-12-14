export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'https://api.jackhu.top/'
  :'http://api.jackhu.top/'
export const API_ROOT_LOCAL='http://localhost:62167/'
export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? '.jackhu.top'
  : ''