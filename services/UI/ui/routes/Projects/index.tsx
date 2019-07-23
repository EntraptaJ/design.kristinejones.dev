// UI/ui/routes/Projects/index.tsx
import { useQuery } from '@apollo/react-hooks';
import { RouteComponentProps, navigate } from '@reach/router';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React, { FunctionComponent } from 'react';
import { useTitle } from 'ui/Components/HeadProvider';
import { Loading } from 'ui/Components/LoadingComponent';
import { ProjectList } from 'ui/Components/Project/ProjectList';
import { Child } from 'ui/Components/Project/types';
import GETPROJECTSGQL from 'ui/lib/GraphQL/getProjects.graphql';
import { Box } from 'ui/Components/Styles/Box';

type ProjectsRoute = FunctionComponent<RouteComponentProps>;

const LoginRoute: ProjectsRoute = () => {
  const { data, loading } = useQuery<{ getProjects: Child[] }>(GETPROJECTSGQL);
  useTitle('My Projects');
  if (loading || !data) return <Loading />;
  return (
    <>
      <Box title='Projects'>
        <ProjectList items={data.getProjects} />
      </Box>
      <div style={{ position: 'fixed', right: '1rem', bottom: '1rem' }}>
        <Fab color='secondary' aria-label='Add' onClick={() => navigate('/Projects/New')}>
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default LoginRoute;
