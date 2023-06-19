import Grid from "@mui/material/Grid";
import {Box, Button, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Link from "next/link";
import HeadingMain from "@/_components/common/Text/HeadingSecondary";
import ReadOnlyFieldLabel from "@/_components/common/Text/ReadOnlyFieldLabel";
import DescriptionText from "@/_components/common/Text/DescriptionText";

const RecentTicketCard = styled(Paper)(({theme}) => ({
  height: '300px',
  width: '100%',
  backgroundColor: 'rgba(76, 175, 80, 0.04)',

  '& h6': {
    fontSize: 20
  },

  '& .MuiButton-root': {
    // closed status colors
    // backgroundColor: theme.palette.errorLighter.main,
    // color: theme.palette.error.main,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },

}));

const DashboardActionsWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: 10,

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    gap: 'unset'
  },
}));

const DashboardActionButton = styled(Button)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '145px',
  width: '100%',
  backgroundColor: 'rgba(76, 175, 80, 0.04)',

  '& .MuiGrid-item': {
    flexDirection: 'row',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    },
  },
}));


const DashboardActions = ({ openNewTicketDialog, openNewCustomerDialog }) => {
  return (
    <Grid container mt={0} spacing={2}>
      <Grid item xs={12} sm={6}>
        <RecentTicketCard elevation={0}>
          <Box p={2}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <HeadingMain variant="h6">Resume Session</HeadingMain>
              <Button component={Link} href={`tickets/245343`} sx={{marginLeft: 'auto'}}>#245343</Button>
            </Box>
            <Box sx={{display: 'flex'}}>
              <Box>
                <ReadOnlyFieldLabel sx={{marginTop: '5px'}}>Customer:</ReadOnlyFieldLabel>
                <DescriptionText>Vance Garner</DescriptionText>
                <ReadOnlyFieldLabel>Title:</ReadOnlyFieldLabel>
                <DescriptionText>Frontend Updates</DescriptionText>
                <ReadOnlyFieldLabel>Description:</ReadOnlyFieldLabel>
                <DescriptionText className={'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</DescriptionText>
              </Box>
            </Box>
          </Box>
        </RecentTicketCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <DashboardActionsWrapper>
          <DashboardActionButton sx={{marginBottom: '10px'}} onClick={() => openNewTicketDialog()}>
            <Grid container direction="column" alignItems="center" justify="center">
              <NoteAddIcon/>
              <Typography>Ticket</Typography>
            </Grid>
          </DashboardActionButton>
          <DashboardActionButton  onClick={() => openNewCustomerDialog()}>
            <Grid container direction="column" alignItems="center" justify="center">
              <PersonAddIcon/>
              <Typography>Customer</Typography>
            </Grid>
          </DashboardActionButton>
        </DashboardActionsWrapper>
      </Grid>
    </Grid>
  );
};

export default DashboardActions;
