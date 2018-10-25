import React from 'react';

const List = (props) => (
    <ul>
        {
            props.myList.map((name, index) => {
                return (
                    <li key={index}>{name}</li>
                );
            })
        }
    </ul>
);

export default List;