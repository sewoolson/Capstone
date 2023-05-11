import html from "html-literal";

export default () => html`
<section id="about">
<h2>About:</h2>
<p>trans·form Healthcare was formed in 2022 to act as a resource for people who are trans to find care based on reviews and added info/experiences from within their community. Having all information in one place would cut the nuances of lengthy searches down making iot easier to find care whether that be locally or nationally. The plan is to expand internationally since people tend to go all over the world for their care.</p>
</section>
<!-- about section ends here -->
<section id="contact">
  <h3>Curios about something? Please fill out the form below.</h3>
  <form
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
</section>
<!-- contact section ends here -->
`;
