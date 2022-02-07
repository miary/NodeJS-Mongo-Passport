const express = require('express');
const indexRoute = require('./index.route');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const registerRoute = require('./register.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: indexRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '/auth/register',
    route: registerRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/',
    route: indexRoute,
  },
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
