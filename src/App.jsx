import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Container} from "./components/Container/Container";
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";


export const App = () => {

  return (
      <>
          <Header/>
          <main>
              <nav>
                  <Navigation/>
              </nav>
              <section></section>
          </main>
          <footer></footer>
      </>
  )
}

export default App


//npm run dev