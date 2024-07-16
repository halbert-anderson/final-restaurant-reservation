/* Always display the table normally */
.table-responsive th,
.table-responsive td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

/* Mobile and small screen adjustments */
@media (max-width: 600px) {
    .table-responsive thead tr {
        display: none; /* Hide the table headers on small screens */
    }

    .table-responsive tbody td {
        display: block; /* Stack the <td>s vertically */
        text-align: right; /* Align the text to the right */
        padding-left: 50%; /* Make room for the labels */
        position: relative; /* Needed for absolute positioning of labels */
        border-bottom: 0; /* Remove border from cells */
    }

    .table-responsive tbody td:before {
        content: attr(data-label); /* Use the data-label attribute as content */
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 10px;
        text-align: left;
        font
