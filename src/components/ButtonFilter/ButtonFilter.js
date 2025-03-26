import React from 'react';


const ButtonFilter = ({ text , activeFilter, onFilterChange,svg}) => { 
    return (
        <button className={`btn ${activeFilter === text ? 'active' : ''}`}  onClick={() => onFilterChange(text)} style={{cursor:"pointer", background:"none", border:"none"}}>
            {svg}
        </button>
    );
};

export default ButtonFilter;

