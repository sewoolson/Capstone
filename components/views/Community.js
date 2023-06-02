import html from "html-literal";
import image1 from "../../assets/icons/createpost.png";
import image2 from "../../assets/icons/userPosts/Ellipse3.png";
import image3 from "../../assets/icons/userPosts/upvote.png";
import image4 from "../../assets/icons/userPosts/downvote.png";
import image5 from "../../assets/icons/userPosts/commentnum.png";
import image6 from "../../assets/icons/userPosts/share.png";
export default () => html`


<h2>Community Forum</h2>
<p>Please be respectful to others. If you violate this you will be removed. If you see something please report it. Thank you and happy connecting!</p>
<div id="create" class="post-container">
<img src="${image1}" alt="createpost">
  <h2>Create Post</h2>
</div>

<div class="text-box">
  <div class="text-container">
    <img src="${image2}" alt="userAvatar" class="userAvatar"><!-- check sizing in css -->
    <p class="text-item" id="userName">Cale.125</p>
    <p class="text-item" id="date">10.26.2022</p>
  </div>
  <p class="text-item" id="title">Out to my parents</p>
  <p class="text-item" id="userContent">I was able to come out to my parents but they were not accepting. I was kicked out.</p>
  <p class="text-item"><a href="#" class="see-more">See more!</a></p>
  <div class="icon-row">
  <img src="${image3}" alt="upvote">
  <img src="${image4}" alt="downvote">
  <img src="${image5}" alt="commentnum">
  <img src="${image6}" alt="share">
  </div>
</div>
`;
