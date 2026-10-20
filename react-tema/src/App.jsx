import React from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import AlterTheme from './components/alter-themes'

export default function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <AlterTheme />
      <Footer />
    </div>
  )
}