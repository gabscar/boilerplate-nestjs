import { UpdateUserDto } from '@app/dtos/user/update.dto';
import { UserPresenter } from '@app/presenters/user.presenter';
import { INJECTION_USECASE_UPDATE_USER } from '@domain/constants/injections/user.constant';
import { IUpdateUserUseCase } from '@domain/usecases/user/update.usecase';
import { Body, Controller, Inject, Param, Put } from '@nestjs/common';

@Controller('user')
export class UpdateUserController {
  constructor(
    @Inject(INJECTION_USECASE_UPDATE_USER)
    private readonly updateUserUseCase: IUpdateUserUseCase,
  ) {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() params: UpdateUserDto) {
    const user = await this.updateUserUseCase.execute(id, params);
    return new UserPresenter().present(user);
  }
}
