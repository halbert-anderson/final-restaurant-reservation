import React from "react";

function SearchForm({ mobileNumber, changeHandler, submitHandler }) {
    return (
        <form onSubmit={submitHandler} className="form-group">
            <div className="row align-items-center search-bar">
                <div className="col-md-8 col-12">
                    <label htmlFor="mobile_number" className="col" >
                    </label>
                    <input className="form-control"
                           type="text"
                           d="mobile_number"
                           name="mobile_number"
                           placeholder="Enter a customer's phone number"
                           autoFocus
                           value={mobileNumber}
                           onChange={changeHandler}
                    />
                </div>
                <div className="col-md-4 col-12 mt-4">
                    <button className="btn btn-primary w-100"
                            type="submit"
                    >Find
                    </button>     
                </div>
            </div>
        </form>
    );
}

export default SearchForm;

   
