import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios"; // Import axios if using it
import BusList from "./BusList";
import { Buses, locations } from "../Utils/index"; 

const Container = styled.div`
  background-color: White;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function BusSearch({ searchState, setSearchState }) {
    const [filteredBus, setFilteredBus] = useState(null);
    const [error, setError] = useState(null); 

    
    
    
    
    const handlesearch = async () => {
        setError(null);
        try {
            const response = await axios.post("http://localhost:9090/api/buses/search", {
                source: searchState.from,
                destination: searchState.to,
                date: searchState.date,
            });
            setFilteredBus(response.data);
        } catch (err) {
            setError("An error occurred while fetching buses."); 
            console.error(err);
        }
    };

    
    
    
    
    return (
        <Container>
            <h2>Search For Buses</h2>
            <div className="d-flex flex-column align-items-center">
                <Form.Select
                    className="mb-3 width-300"
                    value={searchState.from}
                    onChange={(e) =>
                        setSearchState((prevState) => ({
                            ...prevState,
                            from: e.target.value,
                        }))
                    }
                >
                    {locations.map((data) => (
                        <option key={`${data}-source`} value={data}>
                            {data}
                        </option>
                    ))}
                </Form.Select>
                <Form.Select
                    className="mb-3 width-300"
                    value={searchState.to} 
                    onChange={(e) =>
                        setSearchState((prevState) => ({
                            ...prevState,
                            to: e.target.value, 
                        }))
                    }
                >
                    {locations.map((data) => (
                        <option key={`${data}-destination`} value={data}>
                            {data}
                        </option>
                    ))}
                </Form.Select>
                <input
                    className="form-control mb-3 width-300"
                    type="date"
                    value={searchState.date}
                    onChange={(e) =>
                        setSearchState((prevState) => ({
                            ...prevState,
                            date: e.target.value,
                        }))
                    }
                />
            </div>
            <Button variant="primary" className="mb-3" onClick={handlesearch}> 
                Search
            </Button>
            {error && <h3>{error}</h3>} {/* Display error message */}
            {filteredBus && filteredBus.length < 1 && <h3>No Buses Found</h3>}
            {filteredBus && filteredBus.length > 0 && (<BusList buses={filteredBus}/>)}
        </Container>
    );
}
