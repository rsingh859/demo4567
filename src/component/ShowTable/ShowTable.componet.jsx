import React from 'react';

const ShowTable = ({albumId, title, url, thumbnailUrl}) => {
    return (
        <tr>
            <td>{albumId}</td>
            <td>{title}</td>
            <td>{url}</td>
            <td>{thumbnailUrl}</td>
        </tr>
    );
}

export default ShowTable;
