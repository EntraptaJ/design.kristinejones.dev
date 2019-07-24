// UI/ui/Routes/DesignExamples/index.tsx
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router';
import { DesignExample } from 'ui/Components/DesignExamples';

type DesignExamplesRouteType = FunctionComponent<RouteComponentProps>

const DesignExamplesRoute: DesignExamplesRouteType = () => {
  return <DesignExample />
}

export default DesignExamplesRoute;