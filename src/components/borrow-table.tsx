import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { borrowJson } from "./data.json";
const columns: GridColDef[] = [
  {
    field: "user",
    headerName: "USER",
    width: 263,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "profile",
    headerName: "Profile",
    width: 140,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "borrowedAssets",
    headerName: "Borrowed Ammount",
    width: 200,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "borrowValue",
    headerName: "Borrowed Value",
    width: 200,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "depositedAssets",
    headerName: "Deposited Assets",
    width: 200,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "riskFactor",
    headerName: "Risk Factor",
    width: 120,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "opration",
    headerName: "Opration",
    width: 130,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
];

function BorrowTable() {
  let rows = [];
  borrowJson.map((bRow) => {
    let address = `${bRow["user"].substr(0, 5)}...${bRow["user"].substr(-5)}`;
    let newRow = {
      ...bRow,
      user: address,
    };
    rows.push(newRow);
  });
  console.log("rows====>", rows);
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu={true}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        checkboxSelection={false}
        pageSizeOptions={[10, 20]}
        sx={{
          color: "#88B8D8",
          "& .MuiDataGrid-withBorderColor": {
            border: "none",
            textAlign: "center",
          },
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
          },
          "& .MuiDataGrid-columnHeaders": {
            background: "#0A141F",
          },
          "& .MuiDataGrid-selectedRowCount": {
            display: "none",
          },
          
          "& .MuiTablePagination-toolbar": {
            color: "#88B8D8",
          },
        }}
      />
    </div>
  );
}

// 1px solid MuiDataGrid-columnHeaders MuiDataGrid-columnHeader #141929 MuiDataGrid-columnHeaders MuiDataGrid-cell MuiDataGrid-columnHeaderTitle
export default BorrowTable;
