const axios = require('axios');
const FormData = require('form-data');

const main = async (baseUrl, text) => {
  try {
    const form = new FormData();
    form.append('file', `${text}\n\n`, {
      filename: `input-${form.getBoundary()}.txt`,
      contentType: null
    });
    const response = await axios.post(`${baseUrl}/tok/morph/pos`, form, {
      headers: form.getHeaders()
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const { BASE_URL, TEXT } = process.env;
main(BASE_URL, TEXT).then(data => {
  console.log(data);
});
