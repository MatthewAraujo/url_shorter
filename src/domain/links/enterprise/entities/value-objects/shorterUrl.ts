import { randomBytes, createHash } from 'crypto'

export class ShortUrl {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(shortUrl: string) {
    return new ShortUrl(shortUrl)
  }

  static createFromUserUrl(userUrl: string) {
    // Gera um hash SHA-256 e pega os primeiros 6 caracteres
    const hash = createHash('sha256').update(userUrl).digest('hex')
    const short_url = hash.slice(0, 6) // ex: 'f3a1c4'
    return new ShortUrl(short_url)
  }

  static toString(url: ShortUrl) {

  }
}
