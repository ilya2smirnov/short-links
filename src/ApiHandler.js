import axios from 'axios';

let user = "max1";
let password = "maxim3000";

async function getCurrentList(fullLink) {
  const dataGet = { user, password };
    return axios.post('/api/short-links/get', dataGet)
      .then(res => {
        console.log(`Get links: ${res.status}`);
        console.log('Get links resp: ', res.data);
        return res.data["Link list"];
      }).catch((err) => {
        console.error(err);
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

export {getCurrentList};
export {addNewLink};