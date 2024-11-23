interface MamiferoGrande {
  correr(): void;
  comer(): void;
  dormir(): void;
}

interface Simio {
  correr(): void;
  comer(): void;
  dormir(): void;
  trepar(): void;
}

class Elefante implements MamiferoGrande {
  correr() {
    console.log("elefante corriendo");
  }

  comer() {
    console.log("elefante comiendo");
  }

  dormir() {
    console.log("elefante durmiendo");
  }
}

class Rinoceronte implements MamiferoGrande {
  correr() {
    console.log("rinoceronte corriendo");
  }

  comer() {
    console.log("rinoceronte comiendo");
  }

  dormir() {
    console.log("rinoceronte durmiendo");
  }
}

class Mono implements Simio {
  correr() {
    console.log("mono corriendo");
  }

  comer() {
    console.log("mono comiendo");
  }

  dormir() {
    console.log("mono durmiendo");
  }

  trepar() {
    console.log("mono trepando");
  }
}
