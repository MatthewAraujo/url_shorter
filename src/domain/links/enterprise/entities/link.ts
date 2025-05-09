import { AggregateRoot } from '@/core/entities/aggregate-root'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id'
import type { Optional } from '@/core/types/optional'
import { ShortUrl } from './value-objects/shorterUrl'

export interface LinkProps {
	url: string
	shorturl: ShortUrl
	clicks: number
	createdAt: Date
}

export class Link extends AggregateRoot<LinkProps> {
	get url() {
		return this.props.url
	}

	get shorturl() {
		return this.props.shorturl
	}

	get clicks() {
		return this.props.clicks
	}


	get createdAt() {
		return this.props.createdAt
	}

	static create(props: Optional<LinkProps, 'createdAt'>, id?: UniqueEntityID) {
		const link = new Link(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		)

		return link
	}
}
