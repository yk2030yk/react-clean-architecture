import React from 'react'
import { useFetchArticle } from '../../recoil/presenter/hooks'

export const ArticleBox: React.FC = () => {
  const article = useFetchArticle(1)

  if (article) {
    return (
      <div>
        <p>id: {article.id}</p>
        <p>text: {article.text}</p>
      </div>
    )
  } else {
    return <p>loading...</p>
  }
}
