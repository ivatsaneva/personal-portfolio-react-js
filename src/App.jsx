import './assets/index.js'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/home'
import Projects from './pages/Projects/projects'
import Header  from './components/header'
import Meezy from './pages/Work/meezy'
import Dileti from './pages/Work/dileti'
import Dockmate from './pages/Work/dockmate'
import ElCitadel from './pages/Work/el-citadel'
import Elixir from './pages/Work/elixir'
import Rachid from './pages/Work/rachid'
import Tradiro from './pages/Work/tradiro'
import ScrollToTop from './scrollToTop.js'

function App() {
  
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/work/meezy' element={<Meezy/>}></Route>
          <Route path='/work/dileti' element={<Dileti/>}></Route>
          <Route path='/work/dockmate' element={<Dockmate/>}></Route>
          <Route path='/work/el-citadel' element={<ElCitadel/>}></Route>
          <Route path='/work/elixir' element={<Elixir/>}></Route>
          <Route path='/work/rachid' element={<Rachid/>}></Route>
          <Route path='/work/tradiro' element={<Tradiro/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
