import { RedirectLinksUseCase } from '@/domain/links/application/use-cases/link/redirect'
import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Res,
} from '@nestjs/common'
import { Response } from 'express'


@Controller('/shorten')
export class RedirectLinkController {
  constructor(private redirectLink: RedirectLinksUseCase) { }

  @Get(':shortUrl')
  async handle(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const result = await this.redirectLink.execute({
      short_url: shortUrl
    })

    if (result.isErr()) {
      throw new BadRequestException('Error redirecting link')
    }

    const { url } = result.value

    return res.redirect(url)
  }
}

