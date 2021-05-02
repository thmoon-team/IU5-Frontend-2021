import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import ProductItem from '../ProductItem';
import { ApplicationState } from '../../store';
import { Inventory } from '../../store/inventory/types';
import { fetchRequest } from '../../store/inventory/action';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const Container = styled.div`
    width: 100%;
    max-width: 1170px;
    margin: auto;
`;

const ProductListItems = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const { loading, errors, data } = useSelector((state: ApplicationState) => state.inventory);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    return (
        <Container>
            {/* <Navbar /> */}
            <ProductListItems>
                {data.map((item) => {
                    return <ProductItem item={item} />;
                })}
            </ProductListItems>
        </Container>
    );
};

export default HomePage;
