import {
  ArticleDriver,
  ArticleResponseModel,
} from '../../../interface/driver/articleDriver'

export class ArticleDriverImpl implements ArticleDriver {
  async find(id: number): Promise<ArticleResponseModel> {
    // const res = await fetch(`http://localhost:3000/article/${id}`)
    return {
      id,
      text: 'from firebase',
    }
  }
}
