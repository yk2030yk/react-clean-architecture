import { Article } from '../domain/article'

export type ArticleResponseModel = {
  id: number
  text: string
}

export interface ArticleDriver {
  find(id: number): Promise<ArticleResponseModel>
}
