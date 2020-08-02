import axios from 'axios'

async function addNewLinkAndGetCurrentList(fullLink) {
  const data = {
    user: 'max1',
    password: 'max3000',
    fullLink: fullLink,
  };

  return axios.post('/api/short-links/add', data)
    .then((res) => {
      console.log(`Link added: ${res.status}`);
      console.log('Add link resp: ', res.data);
    }).catch((err) => {
    console.error(err);
  });
}