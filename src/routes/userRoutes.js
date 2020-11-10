import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Listar usuários
// router.get('/:id', userController.show); // Listar usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  Por boa prática, vale a pena ter apenas 5 métodos em cada Controller:

  index -> lista todos os usuários -> GET,
  create -> cria um novo usuário -> POST,
  delete -> apaga um usuário -> DELETE,
  show -> mostra um usuário -> GET,
  update -> atualiza um usuário -> PATCH (altera somente 1 valor) ou PUT = (pega 1 obj inteiro e substitui por outro).
*/
