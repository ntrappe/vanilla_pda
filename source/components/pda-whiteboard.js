class PDAWhiteboard extends HTMLElement {
  constructor() {
      super();

      const shadow = this.attachShadow({mode: 'open'});

      const element = document.createElement('p');

      element.textContent = "Whiteboard";
      
      shadow.appendChild(element);
    }
}

customElements.define('pda-whiteboard', PDAWhiteboard);

export { PDAWhiteboard };