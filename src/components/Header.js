import Nav from './Nav'
import logo from '../assets/Logo.svg'
export default function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='Little Lemon' />
      </div>
      <Nav />
    </header>
  )
}
