import "reflect-metadata";

function Evt(prefix: string) {
  return function (target: any, propertyKey: string) {
    console.log("target", target);
    console.log("propertyKey", propertyKey);

    let value: string = "";

    const getter = () => {
      console.log("Getter");
      return value;
    };

    const setter = (next: string) => {
      console.log("Setter");
      value = `${prefix}${next}`;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

function Component(config: { selector: string; template: string }) {
  return function (target: new (...args: any) => any) {
    const instance = new target();
    const element = document.querySelector(config.selector);
    if (element) {
      element.innerHTML = config.template;
      element.querySelector("h1")!.textContent = instance.eventBus;
      const button = element.querySelector("button");
      if (button) {
        button.addEventListener(
          "click",
          instance.showProductList.bind(instance)
        );
        instance.addProduct("Book", 50);
      }
    }
  };
}

function ValidatePassword(regexp: RegExp) {
  return function (target: any, propertyKey: string) {
    let value: string = "";

    const getter = () => {
      console.log("Getter");
      return value;
    };

    const setter = (next: string) => {
      console.log("Setter");
      if (regexp.test(next)) {
        value = next;
      } else {
        throw new Error("Password is invalid");
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

function MinQuantity(min: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (args[1] < min) {
        throw new Error("Quantity is too low");
      } else {
        return original.apply(this, args);
      }
    };
  };
}

function MinLen(min: number) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    const existingRequiredParameters: number[] =
      Reflect.getOwnMetadata("minLenParameters", target, propertyKey) || [];

    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(
      "minLenParameters",
      existingRequiredParameters,
      target,
      propertyKey
    );
  };
}

function validate(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor //TypedPropertyDescriptor<Function>
) {
  const method = descriptor.value!;

  descriptor.value = function (...args: any[]) {
    const minLenParameters: number[] =
      Reflect.getOwnMetadata("minLenParameters", target, propertyName) || [];

    for (const parameterIndex of minLenParameters) {
      if (args[parameterIndex].length < 20) {
        throw new Error("Product name is too short");
      }
    }

    return method.apply(this, args);
  };
}

type TProduct = {
  product: string;
  quantity: number;
};

@Component({
  selector: "#app",
  template: "<h1></h1><button>Click</button>",
})
class Bookstore {
  @Evt("on")
  eventBus = "EventBus";

  @ValidatePassword(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i)
  password = "Testing123456";

  productList: TProduct[] = [];

  @MinQuantity(10)
  //@validate
  addProduct(@MinLen(20) product: string, quantity: number) {
    this.productList.push({ product, quantity });
    console.log("Product List", this.productList);
  }

  showProductList() {
    console.log("Product List", this.productList);
  }
}
