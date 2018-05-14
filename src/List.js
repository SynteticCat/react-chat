import React from 'react';

const data = [
    'item 1',
    'item 2',
    'item 3',
    'item 4'
];

const List = () => (
    <ul>
        {data.map(item => (
            <li>{item}</li>
        ))}
    </ul>
);

export default List;