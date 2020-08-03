import axios from 'axios';
import {username as user, password} from "./signInStatus";

async function getCurrentList(fullLink) {
  const dataGet = { user, password };
    return axios.post('/api/short-links/get', dataGet)
      .then(res => {
        console.log(`Get links: ${res.status}`);
        console.log('Get links resp: ', res.data);
        if (typeof(res.data) !== "object" || !("Link list" in res.data)) {
          throw res.data;
        }
        return res.data["Link list"];
      }).catch((err) => {
        console.error(err);
        throw err;
      });
}

async function checkCreds(user, password) {
  const dataGet = { user, password };
    return axios.post('/api/user/get', dataGet)
      .then(res => {
        console.log(`Get user: ${res.status}`);
        console.log('Get user resp: ', res.data);
        if (typeof(res.data) != "object" || !("Found user" in res.data)) {
          throw res.data;
        }
      }).catch((err) => {
        console.error(err);
        throw err;
      });
}

async function addNewLink(fullLink) {
  const dataAdd = { user, password, fullLink };

  return axios.post('/api/short-links/add', dataAdd)
    .then((res) => {
      console.log(`Link added: ${res.status}`);
      console.log('Add link resp: ', res.data);
      return res.data["Added link"];
    }).catch((err) => {
      console.error(err);
    });
}

export {getCurrentList, addNewLink, checkCreds};