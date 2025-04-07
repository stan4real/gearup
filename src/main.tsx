import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes'
import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from './components/pages/MainPage.tsx';
import ContactPage from './components/pages/contact/ContactPage.tsx';
import Layout from './components/ui/Layout/Layout.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      accentColor='jade'
      grayColor='mauve'
      appearance='light'
      radius='medium'
      scaling='100%'
      panelBackground='translucent'
    >

      <BrowserRouter basename='/gearup'>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<MainPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>,
)
