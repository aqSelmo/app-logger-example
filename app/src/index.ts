import { logger } from '@config/logger';
import { app } from '@config/server';
import { ObjectId } from 'bson';

import { databaseQuery } from './database/client';

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  logger.info(`Server running on port ${PORT}`);

  const usersModel = await databaseQuery.model('users');

  logger.debug('cadastrando usuário no banco');
  await usersModel.create({
    _id: new ObjectId(1),
    name: 'usuario 1',
  });
});
