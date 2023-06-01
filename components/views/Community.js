import html from "html-literal";

export default () => html`

<h2>Community Forum</h2>
<p>Please be respectful to others. If you violate this you will be removed. If you see something please report it. Thank you and happy connecting!</p>
<div id="create" class="post-container">
  <img src="/assets/icons/createpost.png">
  <h2>Create Post</h2>
</div>

<div class="text-box">
  <div class="text-container">
    <img src="assets/icons/userPosts/Ellipse3.png" alt="userAvatar" class="userAvatar">
    <p class="text-item" id="userName">Cale.125</p>
    <p class="text-item" id="date">10.26.2022</p>
  </div>
  <p class="text-item" id="title">Out to my parents</p>
  <p class="text-item" id="userContent">I was able to come out to my parents but they were not accepting. I was kicked out.</p>
  <p class="text-item"><a href="#" class="see-more">See more!</a></p>
  <div class="icon-row">
    <img src="assets/icons/userPosts/upvote.png" alt="icon1">
    <img src="assets/icons/userPosts/downvote.png" alt="icon2">
    <img src="assets/icons/userPosts/commentnum.png" alt="icon3">
    <img src="assets/icons/userPosts/share.png" alt="icon4">
  </div>
</div>
`;
