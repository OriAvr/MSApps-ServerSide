const { fetchPhotos } = require("../../utilities");
const getPhotosByPageId = async (req, res) => {
  try {
    const { category } = req.query;
    const { id } = req.params;
    
    const { data: photos } = await fetchPhotos(id, category);
    res.json(photos);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = { getPhotosByPageId };
