function renderHeader() {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  header.innerHTML = `
    <section id="banner">
    <div class="">
      <header id="header">
        <div class="container">
          <div id="mySidenav" class="sidenav">
            <a href="#about">About</a>
            <a href="#menu-list">Menu</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </header>
      <div class="container-fluid">
        <div class="row">
          <div class="inner text-center">
            <h1 class="logo-name">Delicious</h1>
            <h2>Food To fit your lifestyle & health.</h2>
            <p>Specialized in Indian Cuisine!!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  content.appendChild(header);
};

export default renderHeader;