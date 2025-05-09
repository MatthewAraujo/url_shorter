import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Link } from "@/domain/links/enterprise/entities/link";
import { ShortUrl } from "@/domain/links/enterprise/entities/value-objects/shorterUrl";
import { Url as PrismaLink } from "@prisma/client";

export class PrismaLinkMapper {
  static toDomain(raw: PrismaLink): Link {
    return Link.create(
      {
        url: raw.originalUrl,
        shorturl: ShortUrl.create(raw.shortUrl),
        clicks: raw.clicks,
        createdAt: raw.createdAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPrisma(link: Link): PrismaLink {
    return {
      id: link.id.toString(),
      originalUrl: link.url,
      shortUrl: link.shorturl.value,
      clicks: link.clicks,
      createdAt: link.createdAt,
    };
  }
}
