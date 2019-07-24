// UI/ui/Components/DesignExamples/Breadcrumbs
import React, { FunctionComponent } from 'react'
import { Box } from 'ui/Components/Styles/Box';
import { BreadcrumbBar } from 'ui/Components/Layout/Breadcrumb';

type BreadcrumbsDesignExampleType = FunctionComponent

export const BreadcrumbsDesignExample: BreadcrumbsDesignExampleType = () => {
  return (
    <Box title='Breadcrumbs'>
      <BreadcrumbBar path={[{ label: `Kristian's Designs`, to: '/' }, { label: 'Design Examples', to: '/DesignExamples/' }]} />
    </Box>
  )
}