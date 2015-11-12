module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();

  tokenRouter.post('/', function(req, res) {
    res.status(201).send({
      token: 'MOCK_TOKENS'
    });
  });

  app.use('/api/token', tokenRouter);
};
