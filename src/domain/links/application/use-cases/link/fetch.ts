import { Either, err, ok } from '@/core/either'

import { LinksRepository } from '../../repositories/links-repository'
import { Injectable } from '@nestjs/common'
import { Link } from '@/domain/links/enterprise/entities/link'


type FetchLinksUseCaseResponse = Either<
	null,
	{
		links: Link[]
	}
>

@Injectable()
export class FetchLinksUseCase {
	constructor(private linksRepository: LinksRepository) { }

	async execute(): Promise<FetchLinksUseCaseResponse> {
		const links = await this.linksRepository.findMany()

		if (!links) {
			return err(null)
		}

		return ok({
			links,
		})
	}
}
