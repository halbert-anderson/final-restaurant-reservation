import React, { useState } from "react";
import {useHistory } from "react-router-dom";

function DateButtons({ previous, today, next, date }) {

   const [formDate, setFormDate] = useState(date);
   const history = useHistory();
   
   function dateChangeHandler(event) {
    const newDate = event.target.value;
    setFormDate(newDate);
    history.push(`/dashboard?date=${newDate}`);
  }

  return (
    <div className="date-navigation">
       <div className="button-group">
          <button className="btn btn-secondary mr-2"      
                  type="button" 
                  onClick={() => history.push(previous)}>
          Previous
        </button>

        <button className="btn btn-secondary mr-2"        
                type="button" 
                onClick={() => history.push(today)}>
        Today
        </button>

        <button className="btn btn-secondary mr-2"        
                type="button" 
                onClick={() => history.push(next)}>
        Next
        </button>
      </div>
      <label htmlFor='dashboard_date' className="date-label">
       <input
          className="form-control date-control mt-2" 
          id="dashboard_date"
          name="dashboard_date"
          type="date"
          onChange={dateChangeHandler}
          value={formDate}
        />  
      </label>
    </div>
  
  );
}

export default DateButtons;