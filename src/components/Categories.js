import React from 'react';
import { categories } from '../data'; 
import CategoryItem from './CategoryItem';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Categories = () => {
  return (
      <Container>
          {categories.map(category => {
              <CategoryItem category={item} />
          })}
      </Container>
  );
};

export default Categories;
