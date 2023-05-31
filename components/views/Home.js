import html from "html-literal";

export default (state) => html`
<section id="jumbotron">
  <h1 id="large">Life is hard but your healthcare journey shouldn't be.</h1>
 <h3 id="subhead">Discover health services and professionals based on experiences and reviews from your community.</h3>
  <a href="index.html">"Call to Action" "Button"</a>
 </section>

<div id="sidenav">
      <a href="#updates">Updates</a>
      <a href="#news">News</a>
      <a href="#podcasts">Podcasts</a>
      <a href="#books">Books</a>
      <a href="#medicalpublications">Medical Publications</a>
</div><!-- end sidenav -->


    <h5>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
    </h5>
`
