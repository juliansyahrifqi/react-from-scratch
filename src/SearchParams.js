import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Bandung, Indonesia");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "cat", ANIMALS);
  const [breed, BreedDropdown] = useDropDown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location ..."
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
