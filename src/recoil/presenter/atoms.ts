import { atom } from 'recoil'
import { ArticleUseCaseImpl } from '../../concreteness/useCase/articleUseCase'
import { ArticleRepositoryImpl } from '../../concreteness/repository/articleRepository'
//import { ArticleDriverImpl } from '../../concreteness/driver/db/articleDriver'
import { ArticleDriverImpl as articleFirebaseDriver } from '../../concreteness/driver/firebase/articleDriver'

export const articleUseCaseState = atom({
  key: 'articleUseCaseState',
  default: new ArticleUseCaseImpl(
    //ew ArticleRepositoryImpl(new ArticleDriverImpl())
    new ArticleRepositoryImpl(new articleFirebaseDriver())
  ),
})
