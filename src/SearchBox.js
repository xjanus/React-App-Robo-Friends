import React from 'react';

const SearchBox = () => {
    return (
        <div className="pa2">
            <input 
                type='search' 
                placeholder='search robots'
                className="pa3 ba b--green bg-lightest-blue">
            </input>
        </div>
    );
};

export default SearchBox;