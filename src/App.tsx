import React from 'react'
import { RecoilRoot } from 'recoil'
import { ArticleBox } from './components/ArticleBox'

function App() {
  return (
    <RecoilRoot>
      <ArticleBox />
    </RecoilRoot>
  )
}

export default App
