import { type Either, ok } from '@/core/either'
import { Link } from '@/domain/links/enterprise/entities/link'
import { Injectable } from '@nestjs/common'
import { LinksRepository } from '../../repositories/links-repository'
import { ShortUrl } from '@/domain/links/enterprise/entities/value-objects/shorterUrl'

interface CreateLinkUseCaseRequest {
	url: string
}

type CreateLinkUseCaseResponse = Either<
	null,
	{
		link: Link
	}
>

@Injectable()
export class CreateLinkUseCase {
	constructor(private linksRepository: LinksRepository) { }

	async execute({
		url,
	}: CreateLinkUseCaseRequest): Promise<CreateLinkUseCaseResponse> {
		const link = Link.create({
			clicks: 0,
			shorturl: ShortUrl.createFromUserUrl(url),
			url,
		});

		const existingLink = await this.linksRepository.findByShortUrl(link.shorturl.value);

		if (existingLink) {
			return ok({ link: existingLink });
		}

		await this.linksRepository.create(link);

		return ok({ link });
	}
}

