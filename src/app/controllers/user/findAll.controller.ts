import { FindAllUserDto } from '@app/dtos/user/findAll.dto';
import { UserPresenter } from '@app/presenters/user.presenter';
import { INJECTION_USECASE_FIND_ALL_USER } from '@domain/constants/injections/user.constant';
import { IFindAllUserUseCase } from '@domain/usecases/user/findAll.usecase';
import { Controller, Get, Inject, Query } from '@nestjs/common';

@Controller('user')
export class FindAllUserController {
  constructor(
    @Inject(INJECTION_USECASE_FIND_ALL_USER)
    private readonly findAllUserUseCase: IFindAllUserUseCase,
  ) {}

  @Get('/find/all')
  async findAll(@Query() params: FindAllUserDto) {
    const userList = await this.findAllUserUseCase.execute(params);
    return new UserPresenter().list(userList);
  }
}
