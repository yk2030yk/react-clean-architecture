import { Article } from '../domain/article'

export interface ArticleRepository {
  find(id: number): Promise<Article>
}
