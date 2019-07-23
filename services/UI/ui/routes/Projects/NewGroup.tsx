// UI/ui/routes/Projects/NewProject.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTitle } from 'ui/Components/HeadProvider';
import { NewGroupForm } from 'ui/Components/Project/Groups/NewGroup';

type NewGroupRouteType = FunctionComponent<RouteComponentProps>;

const NewGroupRoute: NewGroupRouteType = () => {
  useTitle('New Group');
  return <NewGroupForm />;
};

export default NewGroupRoute;
