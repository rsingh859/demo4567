import axios from 'axios';
import React, { useEffect } from 'react';
import { fetchDataStart, fetchDataSuccess, fetchDataError } from '../../context/action.creators';
import { useDataLayerContextValue } from '../../context/DataLayer';

const ListPhotos = () => {
    const [{data}, dispatch] = useDataLayerContextValue();
    useEffect(() => {
        dispatch(fetchDataStart());
        axios.get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
             .then(res => dispatch(fetchDataSuccess(res.data)))
             .catch(err => dispatch(fetchDataError(err)));
    },[dispatch]);

    console.log(data);

    return (
        <div>
            {data ? data.map(d => d.id) : <h1>Loading...</h1>}
        </div>
    );
}

export default ListPhotos;
