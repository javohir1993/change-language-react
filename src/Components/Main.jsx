import { useContext } from 'react'
import { LangContext } from '../LangChanger'

function Main () {

  const lang = useContext(LangContext)

  return (
    <main>
      <h2>
        {
          lang.lang === 'eng' && 'Hi ✌'
        }
        {
          lang.lang === 'ru' && 'Привет ✌'
        }
        {
          lang.lang === 'uz' && 'Salom ✌'
        }
      </h2>
    </main>
  )
}

export default Main