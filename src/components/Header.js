function Header() {
  return (
    <header>
      <img src="/assets/little-lemon-header.jpg" alt="Little Lemon Restaurant logo" height={64} aria-label="Little Lemon Restaurant"/>
      <nav>
        <ul>
          <li><a href="#home">Homepage</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;