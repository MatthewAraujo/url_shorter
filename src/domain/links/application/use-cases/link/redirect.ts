import { Either, err, ok } from '@/core/either'
import { LinksRepository } from '../../repositories/links-repository'
import { Injectable } from '@nestjs/common'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

interface RedirectLinksUseCaseRequest {
	short_url: string
}

type RedirectLinksUseCaseResponse = Either<
	ResourceNotFoundError,
	{ url: string }
>

@Injectable()
export class RedirectLinksUseCase {
	constructor(private linksRepository: LinksRepository) { }

	async execute({
		short_url,
	}: RedirectLinksUseCaseRequest): Promise<RedirectLinksUseCaseResponse> {
		const link = await this.linksRepository.findByShortUrl(short_url)

		if (!link) {
			return err(new ResourceNotFoundError())
		}

		await this.linksRepository.incrementClickById(link.id.toString())
		return ok({
			url: link.url,
		})
	}
}

