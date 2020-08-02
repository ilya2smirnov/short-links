import axios from 'axios'

async function addNewLinkAndGetCurrentList(fullLink) {
  const dataAdd = {
    user: 'max1',
    password: 'maxim3000',
    fullLink: fullLink,
  };

  const dataGet = {
    user: 'max1',
    password: 'maxim3000',
  };

  return axios.post('/api/short-links/add', dataAdd)
    .then((res) => {
      console.log(`Link added: ${res.status}`);
      console.log('Add link resp: ', res.data);
      return axios.post('/api/short-links/get', dataGet)
        .then(res => {
          console.log(`Get links: ${res.status}`);
          console.log('Get links resp: ', res.data);
          return res.data;
        })
    }).catch((err) => {
    console.error(err);
  });
}

export default addNewLinkAndGetCurrentList;