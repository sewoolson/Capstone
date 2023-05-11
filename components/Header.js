import html from "html-literal";
import logo from "../assets/TFH-logo.png"

export default () => html`
<section id="header">
<img src="${logo}" alt="transform-health-logo">
</section><!-- end header section -->

<section id="searchbar">
<input type="text" class="search" placeholder="Search.."><br>
</section><!-- end searchbar section -->

`;
