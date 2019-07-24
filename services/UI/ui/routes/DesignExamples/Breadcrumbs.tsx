// UI/ui/routes/DesignExamples/Breadcrumbs.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { BreadcrumbsDesignExample } from 'ui/Components/DesignExamples/Breadcrumbs';

type BreadcrumbDesignExampleRouteType = FunctionComponent<RouteComponentProps>;

const BreadcrumbDesignExampleRoute: BreadcrumbDesignExampleRouteType = () => {
  return <BreadcrumbsDesignExample />;
};

export default BreadcrumbDesignExampleRoute;
