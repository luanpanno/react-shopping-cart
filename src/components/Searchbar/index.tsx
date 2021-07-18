import React, { useState } from 'react';
import { RiCloseCircleFill, RiSearch2Line } from 'react-icons/ri';
import { useHistory, useLocation } from 'react-router-dom';

import { Container, InputWrapper, SearchButton } from './styles';

const Searchbar = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [query, setQuery] = useState(
    new URLSearchParams(search).get('q') ?? ''
  );

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function clearQuery() {
    setQuery('');
    history.push(`/`);
  }

  function handleSearch() {
    history.push(`/search?q=${query}`);
  }

  return (
    <Container>
      <InputWrapper>
        <input
          type="text"
          placeholder="Buscar por produtos"
          value={query}
          onChange={handleQueryChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />

        {query && (
          <button type="button" onClick={clearQuery}>
            <RiCloseCircleFill />
          </button>
        )}
      </InputWrapper>

      <SearchButton type="button" onClick={handleSearch}>
        <RiSearch2Line />
      </SearchButton>
    </Container>
  );
};

export default Searchbar;
