const { Router } = require('express');
const TarefaController = require('../controllers/TarefaController.js');

const tarefaController = new TarefaController();

const router = Router();

router.get('/', (req, res) => {
  res.send('Bem-vindo à API de tarefas!');
});

router.get('/tarefas', (req, res) => tarefaController.pegaTodos(req, res));
router.get('/tarefas/:id', (req, res) => tarefaController.pegaUmPorId(req, res));
router.post('/tarefas', (req, res) => tarefaController.criaNovo(req, res));
router.put('/tarefas/:id', (req, res) => tarefaController.atualiza(req, res));
router.delete('/tarefas/:id', (req, res) => tarefaController.exclui(req, res));

module.exports = router;
