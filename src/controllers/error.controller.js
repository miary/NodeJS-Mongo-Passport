const catchAsync = require('../utils/catchAsync');

const get404 = catchAsync(async (req, res) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

module.exports = {
  get404,
};
