import html from "html-literal";

export default state => html`

<section id="sidenav">
      <a href="#therapy">Therapy</a>
      <a href="#hrt">HRT</a>
      <a href="#surgery">Gender Affirming Surgeries</a>
      <a href="#supportgroups">Support Groups</a>
</section>

<form id="provider">
  <label for="name">Provider Name:</label>
  <input type="text" name="name" id="name"/>

  <label for="location">Provider Location:</label>
    <input type="text" name="location" id="location"/>

  <label for="service">Provider Service Type:</label>
    <input type="text" name="service" id="service"/>

  <label for="message">Message:</label>
    <textarea name="message"></textarea>

  <input type="submit" id="button" name="submit" value="submit"/>
</form>
`;
