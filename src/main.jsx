import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchButton from './searchButton.jsx'
import LuckyButton from './luckyButton.jsx'
import SearchBar from './searchBar.jsx'
import Logotype from './logotype.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function Main () {
  return (
    <main>
      <Logotype></Logotype>
      <SearchBar></SearchBar>
      <div className="buttons">
        <SearchButton></SearchButton>
        <LuckyButton></LuckyButton>
      </div>
    </main>
  )
}

export default Main;
