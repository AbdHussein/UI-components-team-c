import React from 'react'
import { Skeleton } from '../..'
import ComponentOverview from '../../../common/ComponentOverview'

export default function VariantsComponentOverview() {
    return (
        <ComponentOverview style={{ flexDirection: "column" }}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </ComponentOverview>
    
    )
}
