import React from "react";
import { Link, useHistory } from "react-router-dom";
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
        return () => abortController.abort();
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

    return (
        <table className="table table-responsive">
            <thead>
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
                </tr>
            </thead>
            <tbody>
                {reservations.length > 0 ? reservations.map((reservation) => (
                    <tr key={reservation.reservation_id}>
                        <th scope="row">{reservation.reservation_id}</th>
                        <td>{reservation.first_name}</td>
                        <td>{reservation.last_name}</td>
                        <td>{reservation.mobile_number}</td>
                        <td>{reservation.reservation_date}</td>
                        <td>{reservation.reservation_time}</td>
                        <td>{reservation.people}</td>
                        <td data-reservation-id-status={reservation.reservation_id}>{reservation.status}</td>
                        <td>
                            {reservation.status === "booked" && (
                                <>
                                    <Link className="btn btn-secondary mr-2"
                                          to={`/reservations/${reservation.reservation_id}/edit`}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-danger"
                                            type="button"
                                            data-reservation-id-cancel={reservation.reservation_id}
                                            onClick={() => finishReservationHandler(reservation.reservation_id)}>
                                        Cancel
                                    </button>
                                </>
                            )}
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="9" className="text-center">No reservations found.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default DisplayReservations;
