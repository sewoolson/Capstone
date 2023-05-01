import html from "html-literal";

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
export default (links) => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          (link) =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>

    <div class="side-nav">
      <a href="#" class="logo">
        <img src="assets/TFH-logo.png" class="logo-img">
        <img src="assets/TFH-mono-logo.png" class="logo-icon">
      </a>
      <ul class="nav-links">
        <li><a href="index.html"><p><i class="fa-solid fa-house" style="color: #bc7fbf;"></i>Home</p></a></li>
        <li><a href="services.html"><p><i class="fa-solid fa-hand-holding-medical" style="color: #bc7fbf;"></i>Services</p></a></li>
        <li><a href="community.html"><p><i class="fa-solid fa-handshake" style="color: #bc7fbf;"></i>Community</p></a></li>
        <li><a href="questions.html"><p><i class="fa-solid fa-question" style="color: #bc7fbf;"></i>Q&A</p></a></li>
        <li><a href="about.html"><p><i class="fa-solid fa-circle-info" style="color: #bc7fbf;"></i>About</p></a></li>
      </ul>
    </div>
    </div><!--end side-nav div-->
  </nav>
`;
