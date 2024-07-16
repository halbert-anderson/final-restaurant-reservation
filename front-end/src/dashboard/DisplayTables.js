import React from "react";

function DisplayTables({tables, finishHandler }) {
 
  const columnHeadingsForTablesTable = (
    <tr>
        <th scope="col">Table Name</th>
        <th scope="col">Capacity</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
    </tr>
  );  

  const rowsForTablesTable = tables.map((table) => (
    <tr key={table.table_id}>
        <td data-label="Table Name">{table.table_name}</td>
        <td data-label="Capacity">{table.capacity}</td>
        <td data-label="Status"
           data-table-id-status={table.table_id}>
            {table.reservation_id ? "Occupied" : "Free"}
        </td>
        <td data-label="Actions">
            {table.reservation_id ? (
             <button className="btn btn-primary"
                     type="button" 
                     data-table-id-finish={table.table_id}
                     onClick={() => finishHandler(table.table_id)}
              >
              Finish
              </button>) : null}
        </td>       
    </tr>
  ));

return (
      <div className="table-responsive">
        <table className="table">
            <thead>
                {columnHeadingsForTablesTable}
            </thead>
            <tbody>
                {rowsForTablesTable}
            </tbody>
        </table>
      </div>
    );
}


export default DisplayTables;
