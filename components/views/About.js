import html from "html-literal";

export default () => html`
<div id="about">
<h2>About</h2>
<p>Transform Healthcare was formed in 2022 to act as a resource for people who are trans to find care based on reviews and added info/experiences from within their community. Having all information in one place would cut the nuances of lengthy searches down making iot easier to find care whether that be locally or nationally. The plan is to expand internationally since people tend to go all over the world for their care.</p>
</div>


  <h3>Curious about something? Please fill out the form below.</h3>

  <form id="contact" action="" method="POST">
  <label>Name:<input type="name" name="name"></label>

    <label>Email:<input type="email" name="email"></label>
  <label>Message:<textarea name="message"></textarea></label>
  <button type="submit" id="button">Send</button>
</form>

`;
