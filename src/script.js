class Hero
{
    constructor(name, age, type)
    {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    heroAttack(type, skill)
    {
        if (type === "guerreiro" && skill === "espada")
        {
            console.log(`O ${type} atacou usando ${skill}`);
        }
        else if (type === "mago" && skill === "magia")
        {
            console.log(`O ${type} atacou usando ${skill}`);
        }
        else if (type === "monge" && skill === "artes marciais")
        {
            console.log(`O ${type} atacou usando ${skill}`);
        }
        else if (type === "ninja" && skill === "shuriken")
        {
            console.log(`O ${type} atacou usando ${skill}`);
        }
        else
        {
            console.log(`O ${type} não possui essa habilidade para atacar`);
        }
    }
}

const hero = new Hero("Gustavo", 37, "guerreiro");
const hero2 = new Hero("Naiara", 26, "mago");
const hero3 = new Hero("Luna", 17, "monge");
const hero4 = new Hero("Kakashi", 30, "ninja");

hero.heroAttack(hero.type, "espada");
hero.heroAttack(hero2.type, "magia");
hero.heroAttack(hero3.type, "artes marciais");
hero.heroAttack(hero4.type, "shuriken");
