/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import Grid from "@mui/material/Grid";
// import Footer from "examples/Footer";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";

function Employee() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const { columns, rows } = authorsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={3} px={3}>
        <MDBox
          component="form"
          role="form"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} p={0}>
              <MDBox>
                <MDInput type="text" label="Designation Name" fullWidth />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <MDBox>
                <MDInput type="text" label="Designation Role" fullWidth />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <MDBox>
                <MDInput type="text" label="Status" fullWidth />
              </MDBox>
            </Grid>

            <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
              <MDBox>
                <MDButton variant="gradient" color="info" fullWidth>
                  Save
                </MDButton>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <MDBox>
                <MDButton variant="gradient" color="info" fullWidth>
                  Reset
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Card>
        <MDBox p={2} display="flex" alignItems="center" justifyContent="space-between">
          <MDTypography variant="h6" fontWeight="medium">
            List of Designation
          </MDTypography>
          <MDBox conmponent="div" display="flex" alignItems="center">
            <MDBox px={2}>
              <MDInput type="text" label="search" fullWidth />
            </MDBox>
            <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
              <Tooltip title="Download pdf" placement="top">
                <Icon sx={{ cursor: "pointer" }} fontSize="medium">
                  picture_as_pdf
                </Icon>
              </Tooltip>
              <Tooltip px={2} title="Download excel" placement="top">
                <Icon sx={{ cursor: "pointer" }} fontSize="medium">
                  insert_drive_file
                </Icon>
              </Tooltip>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Designation Table
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default Employee;
