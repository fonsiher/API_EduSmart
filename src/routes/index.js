const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser, getProgresoByModo, getNiveles } = require('../controllers/users.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);
router.get('/niveles/:id/:modo', getProgresoByModo);
router.get('/niveles', getNiveles);

module.exports = router;