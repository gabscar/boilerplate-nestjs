import {
  INJECTION_REPOSITORY_USER,
  INJECTION_SERVICE_CREATE_USER,
  INJECTION_SERVICE_DELETE_USER,
  INJECTION_SERVICE_FIND_ALL_USER,
  INJECTION_SERVICE_FIND_BY_USER,
  INJECTION_SERVICE_UPDATE_USER,
  INJECTION_USECASE_CREATE_USER,
  INJECTION_USECASE_DELETE_USER,
  INJECTION_USECASE_FIND_ALL_USER,
  INJECTION_USECASE_FIND_BY_USER,
  INJECTION_USECASE_UPDATE_USER,
} from '@domain/constants/injections/user.constant';
import { DatabaseModule } from '@infra/database/database.module';
import { UserRepositoryDatabase } from '@infra/repositories/user.repository';
import { CreateUserEntityService } from '@infra/services/entities/user/create.service';
import { DeleteUserEntityService } from '@infra/services/entities/user/delete.service';
import { FindAllUserEntityService } from '@infra/services/entities/user/findAll.service';
import { FindByUserEntityService } from '@infra/services/entities/user/findBy.service';
import { UpdateUserEntityService } from '@infra/services/entities/user/update.service';
import { Module } from '@nestjs/common';
import { DeleteUserUseCase } from '@src/usecases/user/delete.usecase';
import { UpdateUserUseCase } from '@src/usecases/user/update.usecase';
import { CreateUserUseCase } from '@usecases/user/create.usecase';
import { FindAllUserUseCase } from '@usecases/user/findAll.usecase';
import { FindByUserUseCase } from '@usecases/user/findBy.usecase';
import { CreateUserController } from './create.controller';
import { DeleteUserController } from './delete.controller';
import { FindAllUserController } from './findAll.controller';
import { FindByEmailUserController } from './findByEmail.controller';
import { UpdateUserController } from './update.controller';

const servicesArr = [
  { useClass: CreateUserEntityService, provide: INJECTION_SERVICE_CREATE_USER },
  { useClass: UpdateUserEntityService, provide: INJECTION_SERVICE_UPDATE_USER },
  { useClass: DeleteUserEntityService, provide: INJECTION_SERVICE_DELETE_USER },
  {
    useClass: FindAllUserEntityService,
    provide: INJECTION_SERVICE_FIND_ALL_USER,
  },
  {
    useClass: FindByUserEntityService,
    provide: INJECTION_SERVICE_FIND_BY_USER,
  },
];

const useCasesArr = [
  { useClass: CreateUserUseCase, provide: INJECTION_USECASE_CREATE_USER },
  { useClass: UpdateUserUseCase, provide: INJECTION_USECASE_UPDATE_USER },
  { useClass: DeleteUserUseCase, provide: INJECTION_USECASE_DELETE_USER },
  { useClass: FindByUserUseCase, provide: INJECTION_USECASE_FIND_BY_USER },
  { useClass: FindAllUserUseCase, provide: INJECTION_USECASE_FIND_ALL_USER },
];

const repositoriesArr = [
  { useClass: UserRepositoryDatabase, provide: INJECTION_REPOSITORY_USER },
];

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateUserController,
    UpdateUserController,
    DeleteUserController,
    FindByEmailUserController,
    FindAllUserController,
  ],
  providers: [...useCasesArr, ...servicesArr, ...repositoriesArr],
})
export class UserModule {}
