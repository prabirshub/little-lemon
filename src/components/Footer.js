import logo from '../assets/Logo.svg'

export default function Footer() {
  return (
    <footer>
      <div>
        <div className='logo'>
          <img src={logo} alt='Little Lemon' />
        </div>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div>
        <h3>Important Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <address>
          <span>Address:</span>
          <p>123 Town Street, Chicago</p>
          <div>
            <span>Phone:</span>
            <a href='tel:+8731234567890'>+872 (123) 456‑7890</a>
          </div>
          <div>
            <span>Email:</span>
            <a href='mailto:hello@littlelemon.com'>hello@littlelemon.com</a>
          </div>
        </address>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  )
}
