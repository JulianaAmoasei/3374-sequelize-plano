const express = require('express');
const pessoas = require('./pessoasRoutes');
const categorias = require('./categoriasRoutes');
const cursos = require('./cursosRoutes');

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
};
