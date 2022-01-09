import React from 'react'
import { Skeleton } from '../..'
import ComponentOverview from '../../../common/ComponentOverview'

export default function ColorComponentOverview() {
    return (
        <ComponentOverview style={{ padding: "20px 10px" }}>
        <Skeleton
          bgColor="black"
          variant="rectangular"
          width={210}
          height={118}
        />
      </ComponentOverview>
    
    )
}
