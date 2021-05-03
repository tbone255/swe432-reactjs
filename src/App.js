import React, {useMemo, useState, useCallback} from 'react';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

import StringStuff from './components/StringStuff';


export default function App(props) {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChangeCurrentTab = useCallback(
    (event, newValue) => {
      setCurrentTab(newValue);
    },
    []
  );

  const {rootSX, tabsSX} = useMemo(
    ()=>({
			rootSX:{ flexGrow: 1 },
      tabsSX: { borderBottom: 1, borderColor: 'divider' }
    }),
    []
  );

  return (
    <Box sx={rootSX}>
      <AppBar position="static">
				<Toolbar>
          <Typography variant="h6" component="div" noWrap >
						SWE 432 - String Stuff
          </Typography>
				</Toolbar>
			</AppBar>
        <StringStuff/>
    </Box>
  );
}
