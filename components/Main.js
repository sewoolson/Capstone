import html from "html-literal";
import * as views from "./views";


export default () => html`
  ${views["index"]()},
  ${views["services"]()}
  ${views["community"]()},
  ${views["questions"]()},
  ${views["about"]()},
`;


export default (state) => html` ${views[state.view](state)} `;

