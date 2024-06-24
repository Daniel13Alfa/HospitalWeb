import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export const TableEntregas = ({ tablehead, tablebody }) => {
  const columns = [
    { field: "id", headerName: "No.", width: 90 },
    { field: "id_solicitud", headerName: "No. Request", width: 150 },
    {
      field: "fecha_solicitud",
      headerName: "Request Date",
      width: 150,
      editable: true,
    },
    {
      field: "fecha_entrega",
      headerName: "Request delivery",
      width: 150,
      editable: true,
    },
    {
      field: "nombre_hospital",
      headerName: "hospital Name",
      width: 150,
      editable: true,
    },
    {
      field: "nombre_insumo",
      headerName: "Supplie Name",
      width: 150,
      editable: true,
    },
    {
      field: "cantidad_solicitada",
      headerName: "Request Quantity",
      width: 150,
      editable: true,
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Box sx={{ height: 690, width: "100%" }}>
          <DataGrid
            rows={tablebody}
            slots={{
              toolbar: GridToolbar,
            }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
          />
        </Box>
      </div>
    </>
  );
};
