// UI/ui/routes/DesignExamples/Select.tsx
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router';
import { SelectDesignExample } from 'ui/Components/DesignExamples/Select';

type  SelectDesignExampleRouteType = FunctionComponent<RouteComponentProps>

const SelectDesignExampleRoute: SelectDesignExampleRouteType = () => {
  return <SelectDesignExample />
}

export default SelectDesignExample;