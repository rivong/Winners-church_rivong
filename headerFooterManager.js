class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top navbar-boxed header-reverse-scroll">
        <div class="container-fluid nav-header-container">
            <div class="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                <a class="navbar-brand" href="index">
                    <img src="images/logo-white.png"  class="default-logo" alt="f">
                    <img src="images/logo-green-dark.png"  class="alt-logo" alt="df">
                    <img src="images/logo-green-dark.png"  class="mobile-logo" alt="dfgd">
                </a>
            </div>
            <div class="col-auto col-lg-8 menu-order px-lg-0">
                <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                    <span class="navbar-toggler-line"></span>
                    <span class="navbar-toggler-line"></span>
                    <span class="navbar-toggler-line"></span>
                    <span class="navbar-toggler-line"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav alt-font">
                        <li class="nav-item">
                            <a href="index" class="nav-link">Home</a>
                            <div class="menu-back-div dropdown-menu megamenu-content" role="menu">
                                <div class="d-lg-flex justify-content-center">
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown simple-dropdown">
                            <a href="#" class="nav-link">About Us</a>
                            <i class="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                            <ul class="dropdown-menu" role="menu">
                                <li class="dropdown">
                                    <a href="our-bishop">Meet the Presiding Bishop</a>
                                </li>
                                <li class="dropdown">
                                    <a href="resident-pastor">Meet our Resident Pastor</a>
                                </li>
                                <li class="dropdown">
                                    <a href="service-group">Service Groups</a>
                                </li>
                                <li class="dropdown">
                                    <a href="monthly-focus">Monthly Prophetic Focus</a>
                                </li>
                                <li class="dropdown">
                                    <a href="pillars">12 Pillars of this Commission</a>
                                </li>
                                <li class="dropdown">
                                    <a href="wsf">WSF</a>
                                </li>
                                <li class="dropdown">
                                    <a href="testimonies">Testimonies</a>
                                </li>
                                <li class="dropdown">
                                    <a href="announcements">Announcements</a>
                                </li>
                                <li class="dropdown">
                                    <a href="youths">Youths</a>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown simple-dropdown">
                            <a href="#" class="nav-link">Mandate</a>
                            <i class="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                            <ul class="dropdown-menu" role="menu">
                                <li class="dropdown">
                                    <a href="publishing">Publishing</a>
                                </li>
                                <li class="dropdown">
                                    <a href="wofbi">WOFBI</a>
                                </li>
                                <li class="dropdown">
                                    <a href="church-growth">Church Growth</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown simple-dropdown">
                            <a href="http://pushpay.com/g/winnerschapelintlindianapolis" class="nav-link">Online Giving</a>
                        </li>

                        <li class="nav-item dropdown simple-dropdown">
                            <a href="javascript:void(0);" class="nav-link">Live</a>
                            <i class="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                            <ul class="dropdown-menu" role="menu">
                                <li class="dropdown"><a href="past-services">Past Service</a></li>
                            </ul>
                        </li>


                        <li class="nav-item dropdown simple-dropdown">
                            <a href="contact-us" class="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        `
    }

}

class SpecialFooter extends HTMLElement {
    ConnectedCallback() {
        this.innerHTML = `
        <footer class="footer-dark bg-slate-blue">
        <div class="footer-top padding-five-tb lg-padding-seven-tb md-padding-50px-tb">
            <div class="container">
                <div class="row">
                    <!-- start footer column -->
                    <div class="col-12 col-md-3 col-sm-6 sm-margin-40px-bottom xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-white text-uppercase margin-15px-bottom xs-margin-10px-bottom">Useful Links</span>
                        <ul>
                            <li><a href="http://winnerschapelmaryland.com/">Winners' Chapek Int'l Americas</a></li>
                            <li><a href="http://faithtabernacle.org.ng/">International HQ</a></li>
                            <li><a href="http://faithtabernacle.org.ng/">B. David Oyedepo</a></li>
                            <li><a href="http://www.davidabioye.org.ng/">B. David Abioye</a></li>
                            <li><a href="http://faithoyedepo.org/">Pst. Faith A. Oyedepo</a></li>

                        </ul>
                    </div>
                    <!-- end footer column -->
                    <!-- start footer column -->
                    <div class="col-12 col-md-3 col-sm-6 sm-margin-40px-bottom xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-white text-uppercase margin-15px-bottom xs-margin-10px-bottom">Get in Touch</span>
                        <ul>                           
                            <li><a href="mailto:Winnerschapelindianapolis@gmail.com">winnerschapelindianapolis@gmail.com</a></li>
                            <li><a href="tel:+13173328717">+13173328717</a></li>
                        </ul>
                    </div>
                    <!-- end footer column -->
                </div>
            </div>
        </div>
        <div class="footer-bottom padding-40px-tb border-top border-color-white-transparent">
            <div class="container"> 
                <div class="row align-items-center">
                    <div class="col-12 col-md-3 text-center text-md-start sm-margin-20px-bottom">
                        <a href="index" class="footer-logo"><img src="images/logo-white.png" data-at2x="images/logo-white.png" alt=""></a>
                    </div>
                    <div class="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom">
                        <p>&copy; Copywright <a href="index" target="_blank" class="text-white text-decoration-line-bottom font-weight-500">Winners' Chapel Int'l Indianapolis</a></p>
                    </div>
                    <div class="col-12 col-md-3 text-center text-md-end">
                        <div class="social-icon-style-12">
                            <ul class="extra-small-icon light">
                                <li><a class="facebook" href="https://www.facebook.com/WinnersChapelindianapolis" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="dribbble" href="https://www.youtube.com/channel/UCBbQvF6vB23i61PlmRc0RBg" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                <li><a class="twitter" href="https://twitter.com/winnerschapelnl?lang=en" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a class="instagram" href="https://www.instagram.com/winnerschapelindy7000/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        
        `
    }

}


customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)