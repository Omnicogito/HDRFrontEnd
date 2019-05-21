export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'humananddoggo.herokuapp.com':
    case 'https://localhost:4200/':
    APIURL = 'https://humananddoggo.azurewebsites.net/api';
    break;

  default:
      APIURL = 'https://humananddoggo.azurewebsites.net/api';
    // APIURL = 'http://localhost:50915';
}
