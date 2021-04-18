import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const Grid = ({ columns, data }) => {

    const { finalColumns, finalData } = useMemo(() => {
        const finalColumns = _ => columns ? columns : []
        const finalData = _ => data ? data : []
        return {
            finalColumns,
            finalData
        }
    }, [columns, data])

    const tableInstance = useTable({ columns: finalColumns(), data: finalData() })


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        // apply the table props
        <table {...getTableProps()}>
            <thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(finalColumns => (
                                    // Apply the header cell props
                                    <th {...finalColumns.getHeaderProps()}>
                                        {// Render the header
                                            finalColumns.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>)
}

export default Grid
