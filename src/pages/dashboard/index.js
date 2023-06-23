import React, {useContext, useState} from 'react';
import withAuth from "@/_context/withAuth";
import {Container, Typography} from "@mui/material";
import TicketTabs from "@/_components/Dashboard/TabMenu";
import DashboardActions from "@/_components/Dashboard/DashboardActions";
import {theme} from "@/_themes/ThemeProvider";
import NewTicketDialog from '@/_components/common/Dialogs/NewTicketDialog';
import NewCustomerDialog from '@/_components/common/Dialogs/NewCustomerDialog';
import HeadingMain from "@/_components/common/Text/HeadingMain";
import SearchDialog from "@/_components/common/Dialogs/SearchDialog";

const styles = {

};

const Dashboard = () => {
  const [openNewTicketDialog, setOpenNewTicketDialog] = useState(false)
  const [openNewCustomerDialog, setOpenNewCustomerDialog] = useState(false)
  const [openSearchDialog, setOpenSearchDialog] = useState(false)

  const handleNewTicketDialogOpen = () => {
    setOpenNewTicketDialog(true);
  };

  const handleNewTicketDialogClose = () => {
    setOpenNewTicketDialog(false);
  };

  const handleNewCustomerDialogOpen = () => {
    setOpenNewCustomerDialog(true);
  };

  const handleNewCustomerDialogClose = () => {
    setOpenNewCustomerDialog(false);
  };

  const handleSearchDialogOpen = () => {
    setOpenSearchDialog(true);
  };

  const handleSearchDialogClose = () => {
    setOpenSearchDialog(false);
  };

  return (
      <main>
        <Container sx={{marginTop: '35px'}}>
          <HeadingMain>Dashboard</HeadingMain>

          <DashboardActions
            openNewTicketDialog={handleNewTicketDialogOpen}
            openNewCustomerDialog={handleNewCustomerDialogOpen}
            openSearchDialog={handleSearchDialogOpen}
          />

          <TicketTabs />

          <NewTicketDialog open={openNewTicketDialog} onClose={handleNewTicketDialogClose} />
          <NewCustomerDialog open={openNewCustomerDialog} onClose={handleNewCustomerDialogClose} />

          <SearchDialog open={openSearchDialog} onClose={handleSearchDialogClose} />
        </Container>
      </main>
  );
};

export default withAuth(Dashboard);
