import { User } from './../models/User';
export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover
    }
  }

  onHeaderHover(): void {
    console.log('mouse over on h1');
  }

  onButtonClick(): void {
    console.log('hi there');
  }

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <div> User name: ${this.model.get('name')}</div>
        <div> User age: ${this.model.get('age')}</div>
        <input />
        <button>Click me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [ eventName, selector ] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render(): void {
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    
    this.bindEvents(templateElement.content)

    this.parent.append(templateElement.content)
  }
}
