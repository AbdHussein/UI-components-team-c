import React from 'react'
import { Skeleton } from '../..'
import ComponentOverview from '../../../common/ComponentOverview'
import Typography from '../../../Typography'

export const InferringdimensionComponentOverview: React.FC<{}> = () => {
    return (
        <ComponentOverview style={{ flexDirection: "column" }}>
        <ComponentOverview style={{ border: "none" }}>
          <Skeleton height={50} />
          <Typography variant="h1"> h1 </Typography>
        </ComponentOverview>
        <ComponentOverview style={{ border: "none" }}>
          <Skeleton height={30} />
          <Typography variant="h2"> h3 </Typography>
        </ComponentOverview>
        <ComponentOverview style={{ border: "none" }}>
          <Skeleton height={16} />
          <Typography variant="h5"> body1 </Typography>
        </ComponentOverview>
        <ComponentOverview style={{ border: "none" }}>
          <Skeleton />
          <Typography variant="h6"> caption </Typography>
        </ComponentOverview>
      </ComponentOverview>
    )
}