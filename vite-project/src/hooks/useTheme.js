import { useEffect, useState } from 'react'

function useTheme() {

   const [theme, setTheme] = useState('light')

   function toggleTheme () {
      setTheme((cur) => {
         return cur === 'light' ? 'dark' : 'light'
      })
   }

   useEffect(() => {
      document.documentElement.className = theme
      localStorage.setItem('theme', theme)
   }, [theme])

   return { toggleTheme, theme }
}

export default useTheme