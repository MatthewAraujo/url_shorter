import { Module } from "@nestjs/common";
import { FetchLinksUseCase } from "@/domain/links/application/use-cases/link/fetch";
import { CreateLinkController } from "./controllers/create-shorter.controller";
import { DeleteLinkController } from "./controllers/delete-link.controller";
import { RedirectLinkController } from "./controllers/redirect-link.controller";
import { DeleteLinkUseCase } from "@/domain/links/application/use-cases/link/delete";
import { DatabaseModule } from "../database/database.module";
import { FetchLinkController } from "./controllers/fetch-links.controller";
import { RedirectLinksUseCase } from "@/domain/links/application/use-cases/link/redirect";
import { CreateLinkUseCase } from "@/domain/links/application/use-cases/link/create";
@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateLinkController,
    DeleteLinkController,
    RedirectLinkController,
    FetchLinkController
  ],
  providers: [
    CreateLinkUseCase,
    FetchLinksUseCase,
    DeleteLinkUseCase,
    RedirectLinksUseCase
  ]
})

export class HttpModule { }