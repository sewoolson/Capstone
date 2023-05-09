import html from "html-literal";

export default() => html`
<div class="header">
    <div class="nav-links">
      <input type="text" class="search" placeholder="Search.."><br>
      <a class="active" href="#therapy">Therapy</a>
      <a href="#hrt">HRT</a>
      <a href="#surgery">Gender Affirming Surgeries</a>
      <a href="supportgroups">Support Groups</a>
    </div><!--end header div-->
<section id="questions">
  <form id="question" method="POST" action="">
    <input type="submit" name="submit" value="Submit"/>
</form>
</section>
`;
//add form to this page
