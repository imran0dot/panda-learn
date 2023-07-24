import { useEffect, useState } from "react";

const Table = ({ data }) => {
    const [rows, setRows] = useState([]);
    const [column, setColumn] = useState([]);
    useEffect(() => {
        for (const singleData of data) {
            setRows(Object.keys(singleData));
            setColumn(Object.values(singleData));
        }
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            {rows.map((x, i) => {
                                return (
                                    <th className="capitalize" key={i}>{x}</th>
                                )
                            }
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            column.map((x, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{x}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;