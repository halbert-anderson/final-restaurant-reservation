import React from "react";
import { Link , useHistory } from "react-router-dom";
import { listReservations, updateStatus } from "../utils/api";

function DisplayReservations({ reservations, setReservations, setReservationsError }) {

    const history = useHistory();

    async function updateStatusHandler(reservation_id, status) {
        const abortController = new AbortController();
        try {
            await updateStatus(reservation_id, status, abortController.signal);
            // Update the local state to reflect changes
            const updatedReservations = await listReservations();
            setReservations(updatedReservations);
        } catch (error) {
            setReservationsError(error);
        }
    }
    

    const finishReservationHandler = async (reservation_id) => {
        if (window.confirm("Do you want to cancel this reservation?")) {
            try {
                await updateStatusHandler(reservation_id, "cancelled");
                history.go(0); // Refresh the page to show updated status
            } catch (error) {
                setReservationsError(error);
            }
        }
    };

    const columnHeadingsForReservationTable = ( 
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Reservation Date</th>
                <th scope="col">Reservation Time</th>
                <th scope="col">People</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
            </tr>);

    const reservationsForThisDate = reservations.length ? (
        reservations.map((reservation, index) => (
                <tr key={reservation.reservation_id}>
                    <td data-label="#">{index + 1}</td>
                    <td data-label="First Name">{reservation.first_name}</td>
                    <td data-label="Last Name">{reservation.last_name}</td>
                    <td data-label="Mobile Number">{reservation.mobile_number}</td>
                    <td data-label="Reservation Date">{reservation.reservation_date}</td>
                    <td data-label="Reservation Time">{reservation.reservation_time}</td>
                    <td data-label="People">{reservation.people}</td>
                    <td data-label="Status"
                        data-reservation-id-status={reservation.reservation_id}>{reservation.status}</td>   
                    <td data-label="Actions">{reservation.status === "booked" && ( 
                        <>  
                                <Link className='btn btn-primary m-1'
                                      to={`/reservations/${reservation.reservation_id}/seat`}
              
                                >Seat
                                </Link>                        

                                <Link className="btn btn-secondary m-1"
                                      to={`/reservations/${reservation.reservation_id}/edit`}
                                >Edit 
                                </Link>
                  
                                <button className="btn btn-danger m-1"
                                        type="button"
                                        data-reservation-id-cancel={reservation.reservation_id}
                                        onClick={() => finishReservationHandler(reservation.reservation_id)}
                                >Cancel
                                </button>
                        
                        </> )}
                </td>             
            </tr>
        ))
    ) : (
        <tr className="no-reservations-row">
            <td colSpan="9">
               <div className="no-reservations-message">
                   No reservations for this date.
               </div>
            </td>
        </tr>
    );

    return (
        <div className="table-responsive">
        <table className="table">
            <thead>
                {columnHeadingsForReservationTable} 
            </thead>
            <tbody>
                {reservationsForThisDate}
            </tbody>
        </table>
        </div>
  );

  }



// return ( <div>
//           <h2>Reservations</h2>
//          <ReservationsTable reservations={reservations} setReservations={setReservations} setReservationsError={setReservationsError} />
//         </div>);
// }
export default DisplayReservations;