import constants from '../common/constants';
import FormData from 'form-data';

const baseUrl = constants.URLS.baseUrl_v1;

export function prepareRegistration(username) {
  
  return Promise.resolve({
    id: '23vervr4tf345234edfdg'
  });
  //TODO implement when endpoint will be create
  /*let form = new FormData();
  form.append('username', username);
  return fetch(`${baseUrl}/registration`, {
    method: 'POST',
    body: form
  }).json();*/
}

export function getRegistrationData(id) {
  
  return Promise.resolve({
    id: '23vervr4tf345234edfdg',
    btc: '1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee',
    count: 234
  });
  
  //TODO implement when endpoint will be create
  /*
  return fetch(`${baseUrl}/registration/${id}`, {
    method: 'GET'
  }).json();
  */
}
export function getRegistrationStatus(btc) {
  
  return Promise.resolve({
    status: 'ok'
  });
  
  //TODO implement when endpoint will be create
  /*
  return fetch(`${baseUrl}/registration/status/${btc}`, {
    method: 'GET'
  }).json();
  */
}

