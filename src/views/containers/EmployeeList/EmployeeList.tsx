import React, { useEffect } from "react";
import { Container } from "@mui/material";
import ContentPaper from "../../components/ContentPaper";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getEmployees } from "./service";

interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  position: string;
}

export const EmployeeList = () => {
  const [loading, setLoading] = React.useState(true);
  const [employees, setEmployees] = React.useState<Array<Employee>>([]);

  const columns: Array<GridColDef> = [
    { field: "firstname", headerName: "First name", width: 150 },
    { field: "lastname", headerName: "Last name", width: 150 },
    { field: "position", headerName: "Position", width: 150 },
  ];

  useEffect(() => {
    getEmployees().then((response) => {
      setEmployees(response.data);
    }).finally(() => {   
      setLoading(false);
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <ContentPaper>
        <DataGrid 
          columns={columns} 
          rows={employees} 
          loading={loading}
        />
      </ContentPaper>
    </Container>
  );
};
