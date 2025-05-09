import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

import { PrismaLinksRepository } from "./prisma/repositories/prisma-link-repository";
import { LinksRepository } from "@/domain/links/application/repositories/links-repository";


@Module({
  providers: [
    PrismaService,
    {
      provide: LinksRepository,
      useClass: PrismaLinksRepository
    },

  ],
  exports:
    [
      PrismaService,
      LinksRepository,
    ],
})
export class DatabaseModule { }
