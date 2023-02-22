import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Container} from "./components/Container/Container";
import {Header} from "./components/Header/Header";


export const App = () => {

  return (
      <>
          <Header/>
          <main>
              <nav>
                  <Container maks='leskin' className="navigation__container"/>
              </nav>
              <section></section>
          </main>
          <footer></footer>
      </>
  )
}

export default App


//npm run dev