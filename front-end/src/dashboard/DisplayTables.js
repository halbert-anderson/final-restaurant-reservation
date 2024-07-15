import React from "react";

// A smaller functional component for table rows
function TableRow({ table, finishHandler }) {
    return (
        <tr key={table.table_id}>
            <td>{table.table_name}</td>
            <td>{table.capacity}</td>
            <td data-table-id-status={table.table_id}>
                {table.reservation_id ? "Occupied" : "Free"}
            </td>
            <td>
                {table.reservation_id && (
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-table-id-finish={table.table_id}
                        onClick={() => finishHandler(table.table_id)}
                        disabled={table.status === "Free"} // Disable button if table is free
                    >
                        Finish
                    </button>
                )}
            </td>
        </tr>
    );
}

// Main component DisplayTables
function DisplayTables({ tables, finishHandler }) {
  // Define the column headings in the main component for better visibility
  const columnHeadingsForTablesTable = (
    <tr>
        <th scope="col">Table Name</th>
        <th scope="col">Capacity</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th> {/* Added a heading for actions like Finish */}
    </tr>
  );

  // Map over tables to create a list of TableRow components
  const rowsForTablesTable = tables.map(table => (
    <TableRow key={table.table_id} table={table} finishHandler={finishHandler} />
  ));

  return (
        <div className="table-responsive"> {/* Added responsive wrapper */}
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
