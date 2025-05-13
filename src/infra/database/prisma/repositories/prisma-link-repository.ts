import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { LinksRepository } from '@/domain/links/application/repositories/links-repository'
import { Link } from '@/domain/links/enterprise/entities/link'
import { PrismaLinkMapper } from '../mappers/prisma-link-mapper'

@Injectable()
export class PrismaLinksRepository implements LinksRepository {
  constructor(private prisma: PrismaService) { }

  async findByShortUrl(shortUrl: string): Promise<Link | null> {
    const link = await this.prisma.url.findUnique({
      where: { shortUrl: shortUrl.trim() }
    })

    if (!link) return null

    return PrismaLinkMapper.toDomain(link)
  }


  async findMany(): Promise<Link[] | null> {
    const links = await this.prisma.url.findMany()

    if (!links || links.length === 0) return []

    return links.map(PrismaLinkMapper.toDomain)
  }

  async create(link: Link): Promise<void> {
    const data = PrismaLinkMapper.toPrisma(link)
    await this.prisma.url.create({ data })
  }

  async delete(link: Link): Promise<void> {
    await this.prisma.url.delete({
      where: {
        id: link.id.toString(),
      },
    })
  }

  async findById(id: string): Promise<Link | null> {
    const link = await this.prisma.url.findUnique({
      where: {
        id,
      },
    })

    if (!link) return null

    return PrismaLinkMapper.toDomain(link)
  }

  async incrementClickById(id: string): Promise<void> {
    await this.prisma.url.update({
      where: { id },
      data: {
        clicks: {
          increment: 1,
        },
      },
    });
  }

}

