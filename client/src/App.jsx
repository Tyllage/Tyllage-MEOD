import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Produce from './pages/Produce.jsx'
import FarmAndMore from './pages/FarmAndMore.jsx'
import Experiences from './pages/Experiences.jsx'
import FindUs from './pages/FindUs.jsx'
import Careers from './pages/Careers.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="produce" element={<Produce />} />
        <Route path="farm-and-more" element={<FarmAndMore />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="find-us" element={<FindUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
