import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
    const {isError, isLoading, forecast, submitRequest} = useForecast(); // calling the hook and retrieve everything the function returns

    const onSubmit = (value) => { 
        submitRequest(value) // when user submits, calling the function submit request which is calling the API
    }
    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {/* Form */}
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {/* Error */}
                    {isError && <Error message={isError} />}
                    {/* Loader */}
                    {isLoading && <Loader />}
                </div>
            )}
            {/* Forecast */}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;
