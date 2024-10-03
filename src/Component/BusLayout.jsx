import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Buses } from "../Utils";
import { Button } from "react-bootstrap";

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const TicketContainer = styled.div`
  padding: 0.5rem;
`;

const TicketItem = styled.li`
  list-style-type: none;
  margin: 0.5rem;
  padding: 1px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
 
`;
export default function ({ selectedSeats, setSelectedseats }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedBus = Buses.find(data => data.id === parseInt(id));
    const isSleeper = selectedBus.busType === 'Sleeper';
    const seatWidth = isSleeper ? '80px' : '25px'

    const isseatAvailable = (seat) => selectedBus.availableSeats.includes(seat);

    const selectSeat = (seat, key) => {
        if (setSelectedseats.includes(seat)) {
            const seats = setSelectedseats.filter((selectedSeat) => selectedSeat != seat);
            setSelectedseats(seats);
            return
        }
        setSelectedseats(prevstate => [...prevstate, seat])
    }



    const isseatSelected = (seat) => selectedBus.availableSeats.includes(seat);
    const generatesSeats = (array, keys = "") =>
        array.map(seats =>
            Array.isArray(seats) ? (<div className="d-flex">
                {
                    seats.map((seat => <TicketItem style={{
                        width: seatWidth,
                        background: isseatSelected(`${keys}${seat}`) ? "#318beb" : isseatAvailable(`${keys}${seat}`)
                            ? "#fff"
                            : '#b6b4b4', cursor: isseatAvailable(`${keys}${seat}`) ? "pointer" : "",
                    }}

                        key={seat}
                        onClick={() => selectSeat(`${keys}${seat}`)}
                    >
                        {keys}
                        {seat}

                    </TicketItem>))
                }

            </div>) : (<TicketItem style={{
                width: seatWidth,
                background: isseatAvailable(`${keys}${seats}`)
                    ? "#fff"
                    : '#b6b4b4', cursor: isseatAvailable(`${keys}${seats}`) ? "pointer" : "",
            }}
                onClick={() => selectSeat(`${keys}${seats}`)}
            >{keys}{seats}

            </TicketItem>));

    return (
        <Container>
            <h2>{selectedBus.name}</h2>
            <h4>Tickets</h4>
            <h5>{selectedBus.busType}</h5>
            <div className="d-flex">
                <div className="d-flex mb-2 align-items-center">
                    <h6>Available -</h6>
                    <TicketItem style={{ width: seatWidth }}>
                        {1}

                    </TicketItem>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <h6>Booked -</h6>
                    <TicketItem style={{ width: seatWidth, background: '#b6b4b4' }}>
                        {1}

                    </TicketItem>
                </div>
                <div className="d-flex mb-2 align-items-center">
                    <h6>Selected -</h6>
                    <TicketItem style={{ width: seatWidth, background: '#318beb' }}>
                        {1}

                    </TicketItem>
                </div>
            </div>
            <ul className="d-flex flex-wrap">
                {
                    isSleeper ? <>
                        <TicketContainer className="d-flex align-items-center">
                            <h6 className="p-3">Upper</h6>
                            <div className="d-flex flex-wrap">
                                {generatesSeats(selectedBus.seatLayout.upper.first, "U")}
                                <div className="d-flex mt-4">
                                    {generatesSeats(selectedBus.seatLayout.upper.second, "U")}
                                </div>
                            </div>


                        </TicketContainer>
                        <TicketContainer className="d-flex align-items-center">
                            <h6 className="p-3">Lower</h6>
                            <div className="d-flex flex-wrap">
                                {generatesSeats(selectedBus.seatLayout.lower.first, "L")}
                                <div className="d-flex mt-4">
                                    {generatesSeats(selectedBus.seatLayout.lower.second, "L")}
                                </div>
                            </div>
                        </TicketContainer>
                    </> 
                    
                    : <></>
                }

            </ul>

            <div className="d-flex justify-content-center">
                {selectedSeats?.length > 0 && (<h4> selected Seats - {selectedSeats.join(", ")}</h4>)}
            </div>

            <div>
                <Button className="ms-3" variant="sucess" onClick={()=> navigate("/bus/book")}
                    
                    disabled={!(selectedSeats && selectedSeats.length>0)}>
                    Book Now

                </Button>
            </div>
        </Container>
    )
}