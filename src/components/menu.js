function renderMenu() {
  const content = document.getElementById('content');
  const menu = document.createElement('menu');
  menu.innerHTML = `
<section id="menu-list" class="section-padding col-sm-9 pr-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center marb-35">
          <h1 class="header-h">Menu List</h1>
          <p class="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            <br>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
        </div>

        <div id="menu-wrapper">

          <div class="breakfast menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="breakfast menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="breakfast menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="breakfast menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="lunch menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="lunch menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="lunch menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="lunch menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="lunch menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="dinner menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="dinner menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>

          <div class="dinner menu-restaurant">
            <span class="clearfix">
              <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">Food Item Name</a>
              <span style="left: 166px; right: 44px;" class="menu-line"></span>
              <span class="menu-price">$20.99</span>
            </span>
            <span class="menu-subtitle">Neque porro quisquam est qui dolorem</span>
          </div>
        </div>

      </div>
    </div>
  </section>
`;
  content.appendChild(menu);
}

export default renderMenu;
