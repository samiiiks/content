// import React, { useState } from 'react'

// const Instagram = () => {
//   const [fgtPass, setFgtPass] = useState('false')
//   const onHandleClick=()=>{
//     setFgtPass(!fgtPass)

//   }

//   return (
//     <div>
//       <input type={fgtPass ? 'password' : 'text'} password='password' />
//       <button onClick={onHandleClick}>show</button>
//     </div>
//   )
// }

// export default Instagram



import React, { useState } from 'react'
import './App.css'

const Instagram = () => {
  const [theme, setTheme] = useState('light')
  const onHandleClick=()=>{
    theme === "light" ? setTheme('dark') : setTheme('light') 
  }
  return (
    <div className={theme}>
      <button onClick={onHandleClick}>togglr</button>
    </div>
  )
}

export default Instagram

