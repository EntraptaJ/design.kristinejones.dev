// UI/ui/routes/DesignExamples/Form.tsx
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { FormDesignExample } from 'ui/Components/DesignExamples/Form'

type FormDesignExampleRouteType = FunctionComponent<RouteComponentProps>

const FormDesignExampleRoute: FormDesignExampleRouteType = () => {
  return <FormDesignExample />
}

export default FormDesignExampleRoute