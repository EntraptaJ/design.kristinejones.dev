// UI/ui/routes/Projects/NewProject.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import { useTitle } from 'ui/Components/HeadProvider';
import { ProjectView } from 'ui/Components/Project/ProjectView'
import { ProjectProvider } from 'ui/Components/Project/ProjectProvider';

type ProjectRouteType = FunctionComponent<RouteComponentProps<{ id: string }>>;

const ProjectRoute: ProjectRouteType = ({ id }) => {
  useTitle('View Project');
  if (id) return <ProjectProvider projectID={id}><ProjectView /></ProjectProvider>;
  else return <Redirect to='/Projects' />
};

export default ProjectRoute;
