export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'humananddoggo.herokuapp.com':
    APIURL = 'https://humananddoggo.azurewebsites.net/api';
    break;

  default:
    APIURL = 'http://localhost:50915';
}
