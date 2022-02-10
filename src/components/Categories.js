import React from 'react';
import { categories } from '../data'; 
import CategoryItem from './CategoryItem';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
`;

const Categories = () => {
  return (
      <Container>
          {categories.map(category => (
              <CategoryItem item={category} key={item.id} />
            ))}
      </Container>
  );
};

export default Categories;
