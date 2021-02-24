import { useContext } from 'react'
import { LangContext } from '../LangChanger'

function Footer () {

  const { lang } = useContext(LangContext)

  return (
    <footer>
      <h3>
        {
          lang === 'eng' && `How's it going? 🤟`
        }
        {
          lang === 'ru' && 'Как дела? 🤟'
        }
        {
          lang === 'uz' && 'Qonday mnday? 🤟'
        }
      </h3>
    </footer>
  )
}

export default Footer