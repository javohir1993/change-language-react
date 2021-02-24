import { useState, createContext, useEffect } from 'react'

const LangContext = createContext()

function LangChanger ({ children }) {

  const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'uz')

  const langObj = {
    lang: lang,
    setLang: setLang
  }

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
  }, [ lang ])

  return (
    <LangContext.Provider value={langObj} className="container">
      {children}
    </LangContext.Provider>
  )
}

export {
    LangChanger,
    LangContext
  }