import { Article } from '../../interface/domain/article'
import { ArticleRepository } from '../../interface/repository/articleRepository'
import { ArticleDriver } from '../../interface/driver/articleDriver'

export class ArticleRepositoryImpl implements ArticleRepository {
  readonly driver: ArticleDriver

  constructor(driver: ArticleDriver) {
    this.driver = driver
  }

  async find(id: number): Promise<Article> {
    const response = await this.driver.find(id)
    return new Article(response.id, response.text)
  }
}
