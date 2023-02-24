import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Container} from "./components/Container/Container";
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Catalog} from "./components/Catalog/Catalog";


export const App = () => {

  return (
      <>
          <Header/>
          <main>
              <nav>
                  <Navigation/>
              </nav>
              <Catalog/>
          </main>
          <footer></footer>
      </>
  )
}

export default App


//npm run dev

//in catalog.module costil'