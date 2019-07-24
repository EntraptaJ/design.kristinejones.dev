// UI/ui/routes/DesignExamples/Buttons.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router'
import { ButtonsDesignExample } from 'ui/Components/DesignExamples/Buttons'

type ButtonsDesignExampleRouteType = FunctionComponent<RouteComponentProps>

const ButtonDesignExampleRoute: ButtonsDesignExampleRouteType = () => {
  return <ButtonsDesignExample />
}

export default ButtonDesignExampleRoute;