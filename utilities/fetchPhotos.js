const axios = require("axios");

const fetchPhotos = (id, category) =>
  new Promise((resolve, reject) =>
    axios
      .get(`${process.env.BASE_URL}&q=${category}&page=${id}`)
      .then((data) => resolve(data))
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  );

module.exports = { fetchPhotos };
