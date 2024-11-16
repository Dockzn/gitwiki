import Logo from "../../assets/images/github.png"
import "./style.css"

function Header() {
  return (
    <header>
        <img src={Logo} alt="Logo Github"/>
    </header>
  )
}

export default Header;