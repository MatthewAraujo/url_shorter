import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Param,
} from '@nestjs/common'

import { DeleteLinkUseCase } from '@/domain/links/application/use-cases/link/delete'

@Controller('/shorten')
export class DeleteLinkController {
  constructor(private deleteLink: DeleteLinkUseCase) { }

  @Delete(':url')
  @HttpCode(200)
  async handle(@Param('url') url: string) {
    const result = await this.deleteLink.execute({
      url
    })


    if (result.isErr()) {
      throw new BadRequestException('Error deleting link')
    }

    return
  }
}

