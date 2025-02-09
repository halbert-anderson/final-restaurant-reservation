import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationForm from "../forms/ReservationForm";
import { createReservation } from "../utils/api";
// import useSubmitHandler from "../hooks/useSubmitHandler";

function ReservationCreate() {
    const initialReservationFormState = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reservation_time: "",
        people: 1,
    };
    const [reservation, setReservation] = useState({...initialReservationFormState});  
    const [reservationErrors, setReservationErrors] = useState(null);
    const history = useHistory();
    
    // const onSuccess = (newReservation) => `/dashboard?date=${newReservation.reservation_date}`;
    // const {submitHandler, errors} = useSubmitHandler(createReservation, hasValidDateAndTime, onSuccess);
    // setReservationErrors(errors);
    
    async function submitHandler(event) {   
      
        event.preventDefault();
        const abortController = new AbortController(); 

        try {
            const newReservation = await createReservation(reservation, abortController.signal);
            history.push(`/dashboard?date=${newReservation.reservation_date}`);
        } catch (error) {
            console.error("createReservation error during form submission:", error);
            setReservationErrors(error);
        } 
    };
  
    

    function changeHandler(event) {
        const { name, value } = event.target;
        setReservation((previousReservation) => ({
            ...previousReservation,
            [name]: name === "people" ? Number(value) : value,
        }));
    }



    return ( 
        <div>
          <h2 className="center-text mt-3">Create Reservation</h2>
          <ErrorAlert error={reservationErrors} /> 
          <ReservationForm reservation={reservation} changeHandler={changeHandler} submitHandler={submitHandler} />
        </div>
    );
}

export default ReservationCreate;
