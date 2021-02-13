import axios from 'axios';
import { TextField, Button} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchDataStart, fetchDataSuccess, fetchDataError, addToData } from '../../context/action.creators';
import { useDataLayerContextValue } from '../../context/DataLayer';

import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import ShowTable from '../ShowTable/ShowTable.componet';

const ListPhotos = () => {
    const [{data}, dispatch] = useDataLayerContextValue();   

    useEffect(() => {
        dispatch(fetchDataStart());
        axios.get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
             .then(res => dispatch(fetchDataSuccess(res.data)))
             .catch(err => dispatch(fetchDataError(err)));
    },[]);

    const[formInput, setFormInput] = useState({
        albumId: '',
        id:'',
        title: '',
        url: '',
        thumbnailUrl: ''
    });

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        dispatch(addToData(formInput));
    }

    console.log(data);

    return (
        <div className='list-container'>
            {data ? (data.map(({id, ...otherProps}) => (
                        <ShowTable key = {id} {...otherProps} />
                ))) 
                : 
                (<h1>Loading...</h1>)
            }
            <div className='adding a form'>
                <button onClick={() => setShowModal(!showModal)}>Add a new record</button>
                <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
                    <ModalHeader toggle={() => setShowModal(!showModal)}>Adding a new record</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <TextField name='albumId' variant='outlined' label='Album Id' fullWidth value={formInput.albumId} onChange={e => setFormInput({...formInput, albumId:e.target.value})} />
                            <TextField name='title' variant='outlined' label='Title' fullWidth value={formInput.title} onChange={e => setFormInput({...formInput, title:e.target.value})} />
                            <TextField name='url' variant='outlined' label='Url' fullWidth value={formInput.url} onChange={e => setFormInput({...formInput, url:e.target.value})} />
                            <TextField name='thumbnailUrl' variant='outlined' label='Thumbnail Url' fullWidth value={formInput.thumbnailUrl} onChange={e => setFormInput({...formInput, thumbnailUrl:e.target.value})} />
                            <Button type='submit'>ADD</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default React.memo(ListPhotos);
