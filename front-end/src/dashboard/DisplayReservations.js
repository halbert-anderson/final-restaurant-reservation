const reservationsForThisDate = reservations.length ? (
        reservations.map((reservation) => (
            <tr key={reservation.reservation_id}>
                <td data-label="#">{reservation.reservation_id}</td>
                <td data-label="First Name">{reservation.first_name}</td>
                <td data-label="Last Name">{reservation.last_name}</td>
                <td data-label="Mobile Number">{reservation.mobile_number}</td>
                <td data-label="Reservation Date">{reservation.reservation_date}</td>
                <td data-label="Reservation Time">{reservation.reservation_time}</td>
                <td data-label="People">{reservation.people}</td>
                <td data-label="Status">{reservation.status}</td>   
                {reservation.status === "booked" && ( 
                <>  
                    <td data-label="Seat">
                        <Link className='btn btn-primary'
                              to={`/reservations/${reservation.reservation_id}/seat`}
                        >Seat
                        </Link>                        
                    </td>
    
                    <td data-label="Edit">
                        <Link className="btn btn-secondary"
                              to={`/reservations/${reservation.reservation_id}/edit`}
                        >Edit 
                        </Link>
                    </td>
    
                    <td data-label="Cancel">
                        <button className="btn btn-danger"
                                type="button"
                                data-reservation-id-cancel={reservation.reservation_id}
                                onClick={() => finishReservationHandler(reservation.reservation_id)}
                        >Cancel
                        </button>
                    </td>
                </> )}
                               
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="8" className="text-center">
                No reservations for this date.
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
    