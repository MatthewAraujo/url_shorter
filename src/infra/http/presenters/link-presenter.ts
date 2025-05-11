import { Link } from "@/domain/links/enterprise/entities/link";

export class LinkPresenter {
  static toHTTP(link: Link) {
    const host = process.env.BASE_URL ?? "http://localhost";
    const port = process.env.PORT ?? 3000;

    const baseUrl = `${host}:${port}`;

    return {
      id: link.id.toString(),
      url: link.url,
      shortUrl: link.shorturl.value,
      localUrl: `${baseUrl}/shorten/${link.shorturl.value}`,
      clicks: link.clicks,
      createdAt: link.createdAt,
    };
  }
}
