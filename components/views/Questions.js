import html from "html-literal";

export default() => html`

<h2>Questions for support<h2>

<form id="questions" action="" method="POST">
  <label>Name:<input type="text" name="name"></label>

  <label>Email:<input type="text" name="email"></label>

  <label>Message:<textarea name="message"></textarea></label>
  <button type="submit" id="button">Send</button>
</form>

`;
//add form to this page
