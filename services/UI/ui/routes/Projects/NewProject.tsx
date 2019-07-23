// UI/ui/routes/Projects/NewProject.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTitle } from 'ui/Components/HeadProvider';
import { NewProjectForm } from 'ui/Components/Project/NewProject';

type NewProjectRouteType = FunctionComponent<RouteComponentProps>;

const NewProjectRoute: NewProjectRouteType = () => {
  useTitle('New Project');
  return <NewProjectForm />;
};

export default NewProjectRoute;
