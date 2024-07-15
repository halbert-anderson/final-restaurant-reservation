import React from "react";


function SearchForm({ mobileNumber, changeHandler, submitHandler }) {
   
   
return (<form onSubmit={submitHandler} className="form-group">
            <div className="row search-bar">
                <label htmlFor="mobile_number" className="col" >
                <input className="form-control"
                       type="text"
                       id="mobile_number"
                       name="mobile_number"
                       placeholder="Enter a customer's phone number"
                       autoFocus
                       value={mobileNumber}
                       onChange={changeHandler}
                />
                </label>
                <button className="btn btn-primary"
                        type="submit"
                >Find
                </button>     
            </div>
        </form>);
}

export default SearchForm;