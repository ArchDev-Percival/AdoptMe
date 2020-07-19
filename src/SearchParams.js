import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => {
              updateLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="animal"
            onChange={(e) => {
              updateAnimal(e.target.value);
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animalString) => (
              <option key={animalString} value={animalString}>
                {animalString}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={!breeds.length}
            placeholder="Breed"
            onChange={(e) => {
              updateBreed(e.target.value);
            }}
            onBlur={(e) => {
              updateBreed(e.target.value);
            }}
          >
            {breeds.map((breedString) => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
