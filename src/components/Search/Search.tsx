import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import cities from "cities.json";
import { useAppDispatch } from "../../hooks/hooks";
import { doGetWeatherByCity } from "../../store/slices/weather.slice";
import { useNavigate } from "react-router-dom";

type CityObject = {
  name: string;
  lat: string;
  lng: string;
  country: string;
  admin1: string;
  admin2: string;
};

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [sortedCities, setSortedCities] = useState<CityObject[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (city: string) => {
    dispatch(doGetWeatherByCity(city));
    navigate("/weather");
  };

  useEffect(() => {
    if (query.trim().length > 3) {
      const result: CityObject[] = cities as CityObject[];
      const sorted = result.filter((city) =>
        city.name.toLowerCase().includes(query.toLowerCase())
      );
      setSortedCities(sorted);
    } else {
      setSortedCities([]);
    }
  }, [query]);

  return (
    <>
      <SearchInput onChange={handleChange} /> 
      {Boolean(sortedCities.length) && (
        <DropdownContainer>
          {sortedCities.map((city, index) => (
            <Item onClick={() => handleSearch(city.name)} key={index}>
              {city.name} ({city.country})
            </Item>
          ))}
        </DropdownContainer>
      )}
    </>
  );
};

export default Search;

const SearchInput = styled.input.attrs((props) => ({
  placeholder: props.placeholder || "Search location",
}))`
  width: 100%;
  height: 56px;
  padding: 18px 20px;
  background-color: var(--color-gray-600);
  border-radius: var(--radii);

  &::placeholder {
    color: var(--color-gray-400);
    content: "Search location";
  }
`;

const DropdownContainer = styled.div`
  width: 100%;
  max-height: 200px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: var(--color-gray-600);
  border-radius: var(--radii);
  overflow-y: scroll;
`;

const Item = styled.div`
  width: 100%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-500);
  }
`;
