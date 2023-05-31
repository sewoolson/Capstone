import html from "html-literal";

export default state => html`

<section id="sidenav">
      <a href="#therapy">Therapy</a>
      <a href="#hrt">HRT</a>
      <a href="#surgery">Gender Affirming Surgeries</a>
      <a href="#supportgroups">Support Groups</a>

<form id="provider-recmnd"
  action=""
  method="POST"
>
  <label>
    Provider Name:
  <input type="name" name="name">
    Provider Location:
    <input type="location" name="location">
  </label>
  Provider Service Type:
    <input type="service" name="service">
  </label>
  <label>
    Message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit" id="button">Send</button>
</form>
</section><!-- end form section -->
</section><!-- end sidenav -->
`;
