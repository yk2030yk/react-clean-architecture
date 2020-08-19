import { Article } from '../domain/article'

export interface ArticleUseCase {
  fetchArticle(id: number): Promise<Article>
}
