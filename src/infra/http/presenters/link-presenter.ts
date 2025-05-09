import { Link } from "@/domain/links/enterprise/entities/link";

export class LinkPresenter {
  static toHTTP(link: Link) {
    const baseUrl = "http://localhost:3333/";

    return {
      id: link.id.toString(),
      url: link.url,
      shortUrl: link.shorturl.value,
      localUrl: `${baseUrl}shorten/${link.shorturl.value}`,
      clicks: link.clicks,
      createdAt: link.createdAt,
    };
  }
}
