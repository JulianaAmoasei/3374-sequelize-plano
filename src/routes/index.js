const express = require('express');
const pessoas = require('./pessoasRoutes');

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
  );
};
