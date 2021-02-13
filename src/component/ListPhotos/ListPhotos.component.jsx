import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataError } from '../../redux/action.creators';

const ListPhotos = () => {
    const data = useSelector(state => state.data);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();
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
