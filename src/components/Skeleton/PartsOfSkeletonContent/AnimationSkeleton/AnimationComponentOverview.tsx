import React from 'react'
import { Skeleton } from '../..'
import ComponentOverview from '../../../common/ComponentOverview'

export default function AnimationComponentOverview() {
    return (
        <ComponentOverview
        style={{ flexDirection: "column", border: "0.1px solid gray" }}
      >
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </ComponentOverview>
   
    )
}
