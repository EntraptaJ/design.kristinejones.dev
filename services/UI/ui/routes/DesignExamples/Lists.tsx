// UI/ui/routes/DesignExamples/Lists.tsx
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router';
import { ListsDesignExample } from 'ui/Components/DesignExamples/Lists';

type ListsDesignExampleRouteType = FunctionComponent<RouteComponentProps>

const ListsDesignExampleRoute: ListsDesignExampleRouteType = () => {
  return <ListsDesignExample />
}

export default ListsDesignExampleRoute;