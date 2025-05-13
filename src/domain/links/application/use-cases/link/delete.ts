import { type Either, err, ok } from '@/core/either'
import { NotAllowedError } from '@/core/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { Link } from '@/domain/links/enterprise/entities/link'
import { LinksRepository } from '../../repositories/links-repository'
import { Injectable } from '@nestjs/common'


interface DeleteLinkUseCaseRequest {
	url: string
}

type DeleteLinkUseCaseResponse = Either<
	ResourceNotFoundError | NotAllowedError,
	{
		link: Link
	}
>

@Injectable()
export class DeleteLinkUseCase {
	constructor(private linksRepository: LinksRepository) { }

	async execute({
		url,
	}: DeleteLinkUseCaseRequest): Promise<DeleteLinkUseCaseResponse> {
		const link = await this.linksRepository.findByShortUrl(url)

		if (!link) {
			return err(new ResourceNotFoundError())
		}


		await this.linksRepository.delete(link)

		return ok({
			link,
		})
	}
}
