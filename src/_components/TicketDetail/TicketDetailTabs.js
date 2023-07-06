import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react'
import TicketDetailsForm from "@/_components/TicketDetail/TicketDetailsCardWrapper";
import TicketDetailsCardWrapper from "@/_components/TicketDetail/TicketDetailsCardWrapper";
import DetailTab from "@/_components/TicketDetail/Tabs/DetailTab";
import NotesTab from "@/_components/TicketDetail/Tabs/NotesTab";
import PaymentTab from "@/_components/TicketDetail/Tabs/PaymentTab";
import CustomerTicketHistory from "@/_components/TicketDetail/Tabs/HistoryTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3, pb: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TicketDetailTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Notes" {...a11yProps(1)} />
          <Tab label="Payment" {...a11yProps(2)} />
          <Tab label="History" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TicketDetailsCardWrapper>
          <DetailTab />
        </TicketDetailsCardWrapper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TicketDetailsCardWrapper>
          <NotesTab />
        </TicketDetailsCardWrapper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TicketDetailsCardWrapper>
          <PaymentTab />
        </TicketDetailsCardWrapper>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TicketDetailsCardWrapper>
          <CustomerTicketHistory />
        </TicketDetailsCardWrapper>
      </TabPanel>
    </Box>
  );
}


export default TicketDetailTabs;
