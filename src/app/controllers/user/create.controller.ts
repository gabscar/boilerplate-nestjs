import { CreateUserDto } from '@app/dtos/user/create.dto';
import { UserPresenter } from '@app/presenters/user.presenter';
import { INJECTION_USECASE_CREATE_USER } from '@domain/constants/injections/user.constant';
import { ICreateUserUseCase } from '@domain/usecases/user/create.usecase';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller('user')
export class CreateUserController {
  constructor(
    @Inject(INJECTION_USECASE_CREATE_USER)
    private readonly createUserUseCase: ICreateUserUseCase,
  ) {}

  @Post()
  async create(@Body() params: CreateUserDto) {
    const user = await this.createUserUseCase.execute(params);
    return new UserPresenter().present(user);
  }
}
