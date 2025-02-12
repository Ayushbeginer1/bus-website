import React, { useState } from 'react';

const Searchbar = ({ onDataFetched }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const apiCall = async () => {
        if (!searchTerm) return; // Avoid API call if the search term is empty

        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`https://api/realtime/VehiclePositions.pb?key=Jz6RsjVt3liAFQdCuuLU2x4Cy2RLbBT&search=${searchTerm}`);
            const data = await response.json();

            // Assuming data contains an array of location objects with latitude and longitude
            if (data && data.locations) {
                onDataFetched(data.locations); // Passing data to parent component
            } else {
                setError('No results found');
            }
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        apiCall();
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <label htmlFor="search">Search</label>
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder="Search here" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Searchbar;
