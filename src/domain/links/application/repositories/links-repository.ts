import type { Link } from '../../enterprise/entities/link'

export abstract class LinksRepository {
	abstract create(link: Link): Promise<void>
	abstract delete(link: Link): Promise<void>
	abstract findByShortUrl(shortUrl: String): Promise<Link | null>
	abstract findMany(): Promise<Link[] | null>
	abstract incrementClickById(id: string): Promise<void>
}
