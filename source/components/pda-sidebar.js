class PDASidebar extends HTMLElement {
  constructor() {
      super();

      const shadow = this.attachShadow({mode: 'open'});

      const element = document.createElement('p');

      element.textContent = "Sidebar";
      
      shadow.appendChild(element);
    }
}

customElements.define('pda-sidebar', PDASidebar);

export { PDASidebar };