import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
} from '@nestjs/common'

import { FetchLinksUseCase } from '@/domain/links/application/use-cases/link/fetch'
import { LinkPresenter } from '../presenters/link-presenter'


@Controller('/shorten')
export class FetchLinkController {
  constructor(private fetchLink: FetchLinksUseCase) { }

  @Get()
  @HttpCode(200)
  async handle(

  ) {
    const result = await this.fetchLink.execute()

    if (result.isErr()) {
      throw new Error('Error fetching Link')
    }

    const { links } = result.value

    if (result.isErr()) {
      throw new BadRequestException()
    }

    return {
      links: links.map(link => LinkPresenter.toHTTP(link))
    }
  }
}

