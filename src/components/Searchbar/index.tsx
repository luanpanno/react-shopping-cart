import React, { useState } from 'react';
import { RiCloseCircleFill, RiSearch2Line } from 'react-icons/ri';

import { Container, InputWrapper, SearchButton } from './styles';

const Searchbar = () => {
  const [query, setQuery] = useState('');

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function clearQuery() {
    setQuery('');
  }

  return (
    <Container>
      <InputWrapper>
        <input type="text" value={query} onChange={handleQueryChange} />

        {query && (
          <button type="button" onClick={clearQuery}>
            <RiCloseCircleFill />
          </button>
        )}
      </InputWrapper>

      <SearchButton type="button">
        <RiSearch2Line />
      </SearchButton>
    </Container>
  );
};

export default Searchbar;
