function renderAbout() {
  const content = document.getElementById('content');
  const about = document.createElement('about');
  about.innerHTML = `
<section id="about" class="section-padding col-sm-9">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1 class="header-h">Delicious Journey</h1>
          <p class="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            <br>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
        </div>
        <div class="col-md-12">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="heading">vel illum qui dolorem eum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
              <div class="details-list align-content-center">
                <ul>
                  <li><i class="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li><i class="fa fa-check"></i>Quisque finibus eu lorem quis elementum</li>
                  <li><i class="fa fa-check"></i>Vivamus accumsan porttitor justo sed </li>
                  <li><i class="fa fa-check"></i>Curabitur at massa id tortor fermentum luctus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  content.appendChild(about);
};

export default renderAbout;