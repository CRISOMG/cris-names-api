const express = require('express');
const UsersService = require('../services/users');

const usersService = new UsersService();

function router(app) {
  const router = express.Router();
  app.use('/api/', router);

  router.get('/', async (req, res, next) => {
    try {
      const data = await usersService.getUsers();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const data = await usersService.getUser(id);

    res.status(200).json(data);
  });

  router.post('/', async (req, res, next) => {
    const { body, headers } = req;

    const userCreatedId = await usersService.createUser(body);

    res.status(201).json(userCreatedId);
  });

  router.put('/:id', async (req, res, next) => {
    const {
      params: { id },
      body,
    } = req;

    try {
      const data = await usersService.updateUser(id, body);
      res.status(203).json(data);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:id', async (req, res, next) => {
    const {
      params: { id },
    } = req;

    const data = await usersService.deleteUser(id);

    res.json(data);
  });
}

module.exports = router;
