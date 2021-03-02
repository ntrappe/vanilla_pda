class PDAAppbar extends HTMLElement {
  constructor() {
      super();

      const shadow = this.attachShadow({mode: 'open'});

      const element = document.createElement('p');

      element.textContent = "Appbar";
      
      shadow.appendChild(element);
    }
}

customElements.define('pda-appbar', PDAAppbar);

export { PDAAppbar };