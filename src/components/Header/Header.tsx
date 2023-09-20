import Button from '../Buttons/Button'
import HeaderBrand from '../../assets/Logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="headerBrand">
        <img src={HeaderBrand} alt="Brand of business" />
      </div>

      <div className="headerMenu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Project</li>
          <li>Contact Us</li>
        </ul>
      </div>
      
      <Button name="Get Started"/>
      
    </header>
  )
}

export default Header