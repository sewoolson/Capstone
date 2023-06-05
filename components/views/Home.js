import html from "html-literal";
import gif1 from "../../assets/animation/hand-final.gif";
import image11 from "../../assets/img-resources/booksimg.png";
import image12 from "../../assets/img-resources/newsimg.png";
import image13 from "../../assets/img-resources/podcastsimg.png";
export default (state) => html`


<div class="container1">
<img src="${gif1}" alt="handwaving" id="handwaving" />
<h1 id="large">Life can be hard but <i>your healthcare journey shouldn't be.</i></h1>
<h3 id="subhead">Discover health services and professionals based on experiences and reviews from your community.</h3>

</div><!-- end container1 div -->

<div class="container2">

  <div id="books">
  <h2 class="homecontentheaders">Books</h2>
  <img src="${image11}" alt="books" id="booksimg" />
    <h3>Trans Books Written by Trans Authors</h3>
    <p class="text-item" id="content">If you enjoy reading, check out this article to support our community</p>
    <p class="text-item"><a href="https://booksandbao.com/transgender-stories-by-trans-writers/"  target="_blank" class="see-more">See more!</a></p>
</div><!-- end books div -->

<div id="news">
<h2 class="homecontentheaders">News</h2>
<img src="${image12}" alt="news" id="newsimg" />
  <h3>US: Anti-Trans Bills Also Harm Intersex Children</h3>
  <p class="text-item" id="content">“State legislation in the US that targets transgender youth is also harming intersex youth,”</p>
  <p class="text-item"><a href="https://www.hrw.org/news/2022/10/26/us-anti-trans-bills-also-harm-intersex-children"  target="_blank" class="see-more">See more!</a></p>
</div><!-- end news div -->

<div id="podcasts">
<h2 class="homecontentheaders">Podcasts</h2>
  <img src="${image13}" alt="podcasts" id="podcastsimg" />
  <h3>TransLash Podcast</h3>
  <p class="text-item" id="content">TransLash tells trans stories to save trans lives. TransLash Podcast with Imara Jones, a biweekly series and Apple Podcasts Spotlight feature, was launched in 2020 as an extension of our daily trans-affirming content and community offerings.</p>

  <p class="text-item"><a href="https://translash.org/podcast/"  target="_blank" class="see-more">See more!</a></p>
</div><!-- end podcasts div -->

</div><!-- end container2 div -->

    <div id="weatherapi">
      <p>The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.</p>
    </div>
`;
