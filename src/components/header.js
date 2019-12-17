function renderHeader() {
  const content = document.getElementById('content');
  const navBar = document.createElement('navBar')
  const header = document.createElement('header');
  header.innerHTML = `
 <section id="banner" class="col-sm-9">
    <div class="bg-color">
      <div class="container">
        <div class="row">
          <div class="inner text-center col-sm-12">
            <h1 class="logo-name">Delicious</h1>
            <h2>Food To fit your lifestyle &amp; health.</h2>
            <p>Specialized in Indian Cuisine!!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  navBar.innerHTML = `
      <div id="mySidenav" class="sidenav col-sm-3">
        <a href="#about">About</a>
        <a href="#menu-list">Menu</a>
        <a href="#contact">Contact</a>
      </div>
  `
  content.appendChild(header);
  document.body.appendChild(navBar);
};

export default renderHeader;