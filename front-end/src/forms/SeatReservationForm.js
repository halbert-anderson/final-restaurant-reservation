import React from "react";
import { useHistory } from "react-router-dom";

function SeatReservationForm({ tables, table_id, changeHandler, submitHandler }) {
    const history = useHistory();

    function cancelHandler() {
        history.goBack();
    }

    return (
        <form onSubmit={submitHandler} className="container">
            <div className="form-group row">
                <label htmlFor="table_id" className="col-sm-3 col-form-label">Table Number:</label>
                <div className="col-sm-9">
                    <select className="form-control"
                            name="table_id"
                            id="table_id"
                            autoFocus
                            value={table_id}
                            onChange={changeHandler}
                            required={true}
                    >
                        <option value="">Select a table</option>
                        {tables.map((table) => (
                            <option key={table.table_id} value={table.table_id}>
                                {table.table_name} - Capacity: {table.capacity}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-group row mt-3">
                <div className="col-sm-12">
                    <button className="btn btn-primary mr-2" type="submit">
                        Submit
                    </button>
                    <button className="btn btn-danger" type="button" onClick={cancelHandler}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SeatReservationForm;
