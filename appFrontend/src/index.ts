type TConfig = { selector: string; template: string };

function Component(config: TConfig) {
  return function (target: any) {
    const instance = new target();
    const value = instance.name;
    const element = document.querySelector(config.selector);
    if (element) {
      element.innerHTML = config.template;
      element.querySelector("h1")!.textContent = value;
    }
  };
}

@Component({
  selector: "#app",
  template: "<h1>Hola Mundo</h1>",
})
class Person {
  name = "Juan Pérez";

  constructor() {
    console.log(`Hola, soy ${this.name}`);
  }
}
