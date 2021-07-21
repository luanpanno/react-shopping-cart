import React, { HTMLAttributes, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Icons from '@components/Icons';
import Tooltip from '@components/Tooltip';

import { urlSearchParams } from '@utils/urlSearchParams';

import { Container, InputWrapper, SearchButton } from './styles';

const Searchbar: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const history = useHistory();
  const { search } = useLocation();
  const [query, setQuery] = useState(urlSearchParams(search, 'q') ?? '');

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
    <Container {...props}>
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
              <Icons.Remove />
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
        <Icons.Search />
      </SearchButton>
      <Tooltip id="searchbar-search" />
    </Container>
  );
};

export default Searchbar;
