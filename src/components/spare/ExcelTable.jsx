import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import * as XLSX from 'xlsx';

export function ExcelTable({ file }) {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Attempting to fetch file from: ${file}`);
                const response = await fetch(file);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                const cols = jsonData[0].map((col, index) => ({
                    Header: col,
                    accessor: index.toString(),
                }));

                const rows = jsonData.slice(1).map((row, rowIndex) => {
                    const rowObj = {};
                    row.forEach((cell, cellIndex) => {
                        rowObj[cellIndex.toString()] = cell;
                    });
                    return rowObj;
                });

                setColumns(cols);
                setData(rows);
                console.log('File successfully fetched and parsed.');
            } catch (error) {
                console.error('Error fetching or parsing file:', error);
                setError(error.message);
            }
        };

        fetchData();
    }, [file]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    if (error) {
        return (
            <div className="bg-slate-50 flex items-center justify-center min-h-[50vh]">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error loading table data: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
