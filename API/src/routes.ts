import {Router} from 'express';
import { UsersControllers } from './controller/UserControllers';

const router = Router();

const usersControllers = new UsersControllers();

router.post("/users",usersControllers.create );

export {router};

/*
*Metos para requisisão
GET- Busca
Post - Salvar
Put- Alterar
Delete - Deletar
Patch - Alteração especifica
*/ 


// Banco de dados 
//Driver do postgress