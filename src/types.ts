interface DefaultObject {
  created: string;
  edited: string;
  url: string;
}

export interface IPerson extends DefaultObject {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}

export interface IPlanet extends DefaultObject {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
}

export interface IFilm extends DefaultObject {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
}

export interface ISpecies extends DefaultObject {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
}

export interface IVehicle extends DefaultObject {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
}

export interface IStarship extends DefaultObject {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
}

interface IDefaultResponce {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface IPeopleResponce extends IDefaultResponce {
  results: IPerson[];
}

export interface IPlanetsResponce extends IDefaultResponce {
  results: IPlanet[];
}

export interface IFilmsResponce extends IDefaultResponce {
  results: IFilm[];
}

export interface ISpeciesResponce extends IDefaultResponce {
  results: ISpecies[];
}

export interface IVehiclesResponce extends IDefaultResponce {
  results: IVehicle[];
}

export interface IStarshipsResponce extends IDefaultResponce {
  results: IStarship[];
}
