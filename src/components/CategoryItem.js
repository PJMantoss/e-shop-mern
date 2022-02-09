import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
`;

const Image = styled.img``;
const Info = styled.div``;
const Title = styled.p``;
const Button = styled.button``;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={} />
        <Info>
            <Title> {} </Title>
            <Button> {} </Button>
        </Info>
    </Container>
  );
};

export default CategoryItem;
