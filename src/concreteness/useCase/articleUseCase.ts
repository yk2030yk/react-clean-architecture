import { Article } from '../../interface/domain/article'
import { ArticleUseCase } from '../../interface/useCase/articleUseCase'
import { ArticleRepository } from '../../interface/repository/articleRepository'

export class ArticleUseCaseImpl implements ArticleUseCase {
  readonly articleRepository: ArticleRepository

  constructor(repository: ArticleRepository) {
    this.articleRepository = repository
  }

  async fetchArticle(id: number): Promise<Article> {
    return await this.articleRepository.find(id)
  }
}
