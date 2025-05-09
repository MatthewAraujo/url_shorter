import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { CreateLinkUseCase } from '@/domain/links/application/use-cases/link/create'
import { LinkPresenter } from '../presenters/link-presenter'
const createLinkBodySchema = z.object({
  url: z.string().url()
})

const bodyValidationPipe = new ZodValidationPipe(createLinkBodySchema)

type CreateLinkBodySchema = z.infer<typeof createLinkBodySchema>

@Controller('/link')
export class CreateLinkController {
  constructor(private createLink: CreateLinkUseCase) { }

  @Post()
  @HttpCode(201)
  async handle(
    @Body(bodyValidationPipe) body: CreateLinkBodySchema,
  ) {
    const { url } = body

    const result = await this.createLink.execute({
      url
    })

    if (result.isErr()) {
      throw new BadRequestException()
    }

    return {
      url: LinkPresenter.toHTTP(result.value.link)
    }
  }
}
