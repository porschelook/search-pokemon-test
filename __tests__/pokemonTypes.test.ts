// __tests__/pokemonTypes.test.ts

type Pokemon = {
  name: string;
  types: string[];
};

const mockPokemons: Pokemon[] = [
  {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
  },
  {
    name: "Charmander",
    types: ["Fire"],
  },
  {
    name: "Squirtle",
    types: ["Water"],
  },
];

describe("Pokemon Type Assertions", () => {
  it("should have Bulbasaur as a Grass type", () => {
    const bulbasaur = mockPokemons.find(p => p.name === "Bulbasaur");
    expect(bulbasaur?.types).toContain("Grass");
  });

  it("should have Charmander as a Fire type", () => {
    const charmander = mockPokemons.find(p => p.name === "Charmander");
    expect(charmander?.types).toContain("Fire");
  });

  it("should have Squirtle as a Water type", () => {
    const squirtle = mockPokemons.find(p => p.name === "Squirtle");
    expect(squirtle?.types).toContain("Water");
  });
});
