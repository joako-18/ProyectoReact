import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='back'>
    <div>
      <Header/>
    </div>
      <div className='container'>
        <Button
        title="Top 10"
        link="/Top"
        />
        <Button
        title="Salon de la Fama"
        />
        <Button
        title="Logros destacados"
        />
      </div>
      </div>
    </>
  )
}

export default App
