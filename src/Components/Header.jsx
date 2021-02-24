import { useContext } from 'react'
import { LangContext } from '../LangChanger'


function Header () {

  const { lang, setLang } = useContext(LangContext)

  return (
    <header>
      <h1>
        {
          lang === 'eng' && `Hello [${lang}] 🤝`
        }
        {
          lang === 'ru' && `Здравствуйте [${lang}] 🤝`
        }
        {
          lang === 'uz' && `Assalomu alaykum [${lang}] 🤝`
        }
      </h1>

      <select defaultValue={lang} onChange={e => setLang(e.target.value)}>
        <option value="eng">Eng</option>
        <option value="ru">Ru</option>
        <option value="uz">Uzb</option>
      </select>
    </header>
  )
}

export default Header