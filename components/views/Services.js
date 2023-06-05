import html from "html-literal";

export default state => html`

<form id="provider">
  <label for="providerName">Provider Name:</label>
  <input type="text" name="providerName" id="providerName" />

  <label for="location">Provider Location:</label>
    <input type="text" name="location" id="location" />

  <label for="serviceType">Provider Service Type:</label>
    <input type="text" name="serviceType" id="serviceType" />

  <label for="userReview">Review:
    <textarea name="userReview"></textarea>
</label>
    <input type="submit" id="button" name="submit" value="submit"/>
</form>

<table id="services">
<tr>
  <th>name</th>
  <th>location</th>
  <th>service</th>
  <th>message</th>
</tr>
${state.services
  .map(service => {
    return `<tr><td>${service.providerName}</td><td>${service.location}</td><td>${
      service.serviceType
    }</td><td>${service.userReview}</td></tr>`;
  })
  .join("")}

</table>
`;
