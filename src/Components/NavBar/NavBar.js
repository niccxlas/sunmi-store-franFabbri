import "./NavBar.css"


const NavBar = () =>{
  return (
<nav className="nav">
  <a href="/" className="site-title">
    Sunmi Store
  </a>
  <ul>
    <li>
      <a href="/home">Home</a>
      <a href="/catalog">Catálogo</a>
      <a href="/us">Nosotros</a>
      <a href="/contact">Contacto</a>
    </li>
  </ul>
</nav>
  );
};

export default NavBar