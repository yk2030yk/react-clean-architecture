import { atom } from 'recoil'
import { ArticleUseCaseImpl } from '../../concreteness/useCase/articleUseCase'
import { ArticleRepositoryImpl } from '../../concreteness/repository/articleRepository'
import ArticleDriverImpl from '../../concreteness/driver/articleDriver'

export const articleUseCaseState = atom({
  key: 'articleUseCaseState',
  default: new ArticleUseCaseImpl(
    new ArticleRepositoryImpl(new ArticleDriverImpl())
  ),
})
