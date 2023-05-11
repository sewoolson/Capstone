import html from "html-literal";

export default() => html`
<section id="sidenav">
      <a href="#commonFAQ">FAQs</a>
      <a href="#support">Support</a>
</section><!-- end sidenav -->
<section id="questions">
<form id="questionsform"
  action="https://formspree.io/f/mbjebjaz"
  method="POST"
>
  <label>
    Name:
  <input type="name" name="name">
    Email:
    <input type="email" name="email">
  </label>
  <label>
    Message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit" id="button">Send</button>
</form>
</section><!-- end form section -->
`;
//add form to this page
