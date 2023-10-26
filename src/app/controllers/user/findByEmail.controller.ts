import { UserPresenter } from '@app/presenters/user.presenter';
import { INJECTION_USECASE_FIND_BY_USER } from '@domain/constants/injections/user.constant';
import { IFindByUserUseCase } from '@domain/usecases/user/findBy.usecase';
import { Controller, Get, Inject, Param } from '@nestjs/common';

@Controller('user')
export class FindByEmailUserController {
  constructor(
    @Inject(INJECTION_USECASE_FIND_BY_USER)
    private readonly findByUserUseCase: IFindByUserUseCase,
  ) {}

  @Get('/find/email/:email')
  async findByEmail(@Param('email') email: string) {
    const user = await this.findByUserUseCase.execute({
      where: {
        AND: [
          {
            column: 'email',
            value: email,
          },
        ],
      },
    });
    return new UserPresenter().present(user);
  }
}
