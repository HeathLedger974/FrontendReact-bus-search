import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BusListContainer = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const BusListItem = styled.div`
  background-color: White;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem; /* Add some spacing between items */
`;

export default function BusList({ buses }) {
    const navigate = useNavigate();

    console.log("Buses passed to BusList:", buses); 

    return (
        <BusListContainer>
            <h2>Available Buses</h2>
            {buses.length === 0 ? (
                <p>No buses available for the selected route and date.</p>
            ) : (
                buses.map((bus) => (
                    <BusListItem
                        
                        key={bus.id}
                        >
                        <div>
                            <h3>{bus.name}</h3>
                            <p>
                                <strong>Source:</strong> {bus.source}
                            </p>
                            <p>
                                <strong>Destination:</strong> {bus.destination}
                            </p>
                            <p>
                                <strong>Departure Time:</strong> {bus.departureTime}
                            </p>
                            <p>
                                <strong>Arrival Time:</strong> {bus.arrivalTime}
                            </p>
                            <p>
                                <strong>Price:</strong> {bus.price}
                            </p>
                            <p>
                                <strong>Type:</strong> {bus.busType}
                            </p>
                            <div>
                                <Button
                                    className="mb-3"
                                    variant="success"
                                    onClick={() => navigate(`bus/${bus.id}`)}
                                >
                                    Book Now
                                </Button>
                                <h5>Available Seats: {bus.availableSeats.length}</h5>
                            </div>
                        </div>
                    </BusListItem>
                ))
            )}
        </BusListContainer>
    );
}
