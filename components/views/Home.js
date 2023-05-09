import html from "html-literal";

export default (state) => html`

<section id="jumbotron">
  <h1>Life is hard but your healthcare journey shouldn't be.</h1>
  <h3>Welcome to Transform Health, a place that holds resources and recommendations provided by trans folk.</h3>

  <a href="index.html">"Call to Action" "Button"</a>
  </section>

    <h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
    </h3>

`;
