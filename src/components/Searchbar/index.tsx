import React, { useState } from 'react';
import { RiCloseCircleFill, RiSearch2Line } from 'react-icons/ri';
import { useHistory, useLocation } from 'react-router-dom';

import Tooltip from '@components/Tooltip';

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
          data-cy="search-input"
        />

        {query && (
          <>
            <button
              type="button"
              onClick={clearQuery}
              data-for="searchbar-reset"
              data-tip="Limpar pesquisa"
              data-cy="clear-search"
            >
              <RiCloseCircleFill />
            </button>
            <Tooltip id="searchbar-reset" />
          </>
        )}
      </InputWrapper>

      <SearchButton
        type="button"
        onClick={handleSearch}
        data-for="searchbar-search"
        data-tip="Pesquisar"
        data-cy="search-button"
      >
        <RiSearch2Line />
      </SearchButton>
      <Tooltip id="searchbar-search" />
    </Container>
  );
};

export default Searchbar;
