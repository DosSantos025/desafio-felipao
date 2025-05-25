class Heroi {
  constructor(nome, idade, tipo) {
    this.nome  = nome;   
    this.idade = idade;  
    this.tipo  = tipo;   
  }

  atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";            
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "força bruta";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const herois = [
  new Heroi("Sky", 120, "mago"),
  new Heroi("Tsuky", 45, "guerreiro"),
  new Heroi("Proteus", 30, "monge"),
  new Heroi("LordNinja", 22, "ninja")
];

for (const heroi of herois) {
  heroi.atacar();
}