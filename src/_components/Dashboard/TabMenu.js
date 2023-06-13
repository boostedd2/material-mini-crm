import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TicketsTable from "@/_components/Dashboard/TicketsTable";
import ClosedTicketsTable from "@/_components/Dashboard/ClosedTicketsTable";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`ticket-tabpanel-${index}`}
      aria-labelledby={`ticket-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{pt: 2}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `ticket-tab-${index}`,
    'aria-controls': `ticket-tabpanel-${index}`,
  };
}

const TicketTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="ticket tabs">
          <Tab label="Open" {...a11yProps(0)} />
          <Tab label="Closed" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TicketsTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ClosedTicketsTable />
      </TabPanel>
    </Box>
  );
}

export default TicketTabs;
