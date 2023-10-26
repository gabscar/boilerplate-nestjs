import { INJECTION_USECASE_DELETE_USER } from '@domain/constants/injections/user.constant';
import { IDeleteUserUseCase } from '@domain/usecases/user/delete.usecase';
import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
} from '@nestjs/common';

@Controller('user')
export class DeleteUserController {
  constructor(
    @Inject(INJECTION_USECASE_DELETE_USER)
    private readonly deleteUserUseCase: IDeleteUserUseCase,
  ) {}

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteUserUseCase.execute(id);
  }
}
