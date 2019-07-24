// UI/ui/routes/DesignExamples/Dialogs.tsx
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DialogsDesignExample } from 'ui/Components/DesignExamples/Dialogs';

type DialogDesignExampleRouteType = FunctionComponent<RouteComponentProps>

const DialogsDesignExampleRoute: DialogDesignExampleRouteType = () => {
  return <DialogsDesignExample />

}

export default DialogsDesignExample;