import { useRecoilValue } from 'recoil'
import { articleUseCaseState } from './atoms'
import { useState, useEffect, useCallback } from 'react'
import { Article } from '../../interface/domain/article'

export const useFetchArticle = (id: number) => {
  const articleUseCase = useRecoilValue(articleUseCaseState)
  const [article, setArticle] = useState<Article>()

  const fetchArticle = useCallback(async () => {
    const article = await articleUseCase.fetchArticle(id)
    setArticle(article)
  }, [articleUseCase, id, setArticle])

  useEffect(() => {
    fetchArticle()
  }, [fetchArticle])

  return article
}
