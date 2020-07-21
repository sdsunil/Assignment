import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CampaignsTable from './campaign-table';
import CampaignData from '../Data/Campaigns';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [campaignData, setCampData] = React.useState(CampaignData);
  const [campaignUpcomming, setCampUpcomming] = React.useState([]);
  const [campaignLive, setCampLive] = React.useState([]);
  const [campaignPast, setCampPast] = React.useState([]);
  const { t } = useTranslation();

  function arrangeData(campData) {
    let upcomming = [],
      live = [],
      past = [];
    campData.forEach(element => {
      let days = moment((new Date(element.createdOn)).toUTCString()).diff(moment(), 'days');
      if (days > 1)
        upcomming.push(element)
      else if (days == 0)
        live.push(element)
      else past.push(element)
    })
    setCampUpcomming(upcomming)
    setCampLive(live)
    setCampPast(past)
  }

  React.useEffect(() => {
    arrangeData(campaignData);
  }, [])

  function changes(item) {
    campaignData.forEach(ele => {
      if (ele.id == item.id)
        ele = item;
    })
    setCampData(campaignData);
    arrangeData(campaignData)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={t("Upcoming Campaigns")} {...a11yProps(0)} />
          <Tab label={t("Live Campaigns")} {...a11yProps(1)} />
          <Tab label={t("Past Campaigns")} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis='x'
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CampaignsTable Items={campaignUpcomming} Callback={changes} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CampaignsTable Items={campaignLive} Callback={changes} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <CampaignsTable Items={campaignPast} Callback={changes} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}