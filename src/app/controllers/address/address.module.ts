import {
  INJECTION_REPOSITORY_ADDRESS,
  INJECTION_SERVICE_CREATE_ADDRESS,
  INJECTION_SERVICE_DELETE_ADDRESS,
  INJECTION_SERVICE_FIND_ALL_ADDRESS,
  INJECTION_SERVICE_FIND_BY_ADDRESS,
  INJECTION_SERVICE_UPDATE_ADDRESS,
  INJECTION_USECASE_CREATE_ADDRESS,
  INJECTION_USECASE_DELETE_ADDRESS,
  INJECTION_USECASE_FIND_ALL_ADDRESS,
  INJECTION_USECASE_FIND_BY_ADDRESS,
  INJECTION_USECASE_UPDATE_ADDRESS,
} from '@domain/constants/injections/address.constant';
import { DatabaseModule } from '@infra/database/database.module';
import { AddressRepositoryDatabase } from '@infra/repositories/address.repository';
import { CreateAddressEntityService } from '@infra/services/entities/address/create.service';
import { DeleteAddressEntityService } from '@infra/services/entities/address/delete.service';
import { FindAllAddressEntityService } from '@infra/services/entities/address/findAll.service';
import { FindByAddressEntityService } from '@infra/services/entities/address/findBy.service';
import { UpdateAddressEntityService } from '@infra/services/entities/address/update.service';
import { Module } from '@nestjs/common';
import { DeleteAddressUseCase } from '@src/usecases/address/delete.usecase';
import { UpdateAddressUseCase } from '@src/usecases/address/update.usecase';
import { CreateAddressUseCase } from '@usecases/address/create.usecase';
import { FindAllAddressUseCase } from '@usecases/address/findAll.usecase';
import { FindByAddressUseCase } from '@usecases/address/findBy.usecase';
import { CreateAddressController } from './create.controller';
import { DeleteAddressController } from './delete.controller';
import { FindAllAddressController } from './findAll.controller';
import { FindByIdAddressController } from './findById.controller';
import { UpdateAddressController } from './update.controller';

const servicesArr = [
  {
    useClass: CreateAddressEntityService,
    provide: INJECTION_SERVICE_CREATE_ADDRESS,
  },
  {
    useClass: UpdateAddressEntityService,
    provide: INJECTION_SERVICE_UPDATE_ADDRESS,
  },
  {
    useClass: DeleteAddressEntityService,
    provide: INJECTION_SERVICE_DELETE_ADDRESS,
  },
  {
    useClass: FindAllAddressEntityService,
    provide: INJECTION_SERVICE_FIND_ALL_ADDRESS,
  },
  {
    useClass: FindByAddressEntityService,
    provide: INJECTION_SERVICE_FIND_BY_ADDRESS,
  },
];

const useCasesArr = [
  {
    useClass: CreateAddressUseCase,
    provide: INJECTION_USECASE_CREATE_ADDRESS,
  },
  {
    useClass: FindByAddressUseCase,
    provide: INJECTION_USECASE_FIND_BY_ADDRESS,
  },
  {
    useClass: FindAllAddressUseCase,
    provide: INJECTION_USECASE_FIND_ALL_ADDRESS,
  },
  {
    useClass: DeleteAddressUseCase,
    provide: INJECTION_USECASE_DELETE_ADDRESS,
  },
  {
    useClass: UpdateAddressUseCase,
    provide: INJECTION_USECASE_UPDATE_ADDRESS,
  },
];

const repositoriesArr = [
  {
    useClass: AddressRepositoryDatabase,
    provide: INJECTION_REPOSITORY_ADDRESS,
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAddressController,
    FindByIdAddressController,
    FindAllAddressController,
    DeleteAddressController,
    UpdateAddressController,
  ],
  providers: [...useCasesArr, ...servicesArr, ...repositoriesArr],
})
export class AddressModule {}
