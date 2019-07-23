// UI/ui/routes/Home/index.tsx
import React, { FunctionComponent, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { PropContext } from 'ui/Components/PropProvider';
import { useTitle } from 'ui/Components/HeadProvider';
import Typography from '@material-ui/core/Typography';
import { Box } from 'ui/Components/Styles/Box';

type HomeRouteType = FunctionComponent<RouteComponentProps>;

const HomeRoute: HomeRouteType = () => {
  const { useProps, props } = useContext(PropContext);
  useTitle(`Kristian's Design`);
  useProps(async () => ({ title: `Kristian's Design` }));
  return (
    <Box title={props.title}>
      <Typography variant='subtitle1' color='textSecondary'>
        by KristianFJones
      </Typography>
      <Typography variant='body1'>
        This is a demo my custom design templates
      </Typography>
    </Box>
  );
};

export default HomeRoute;
