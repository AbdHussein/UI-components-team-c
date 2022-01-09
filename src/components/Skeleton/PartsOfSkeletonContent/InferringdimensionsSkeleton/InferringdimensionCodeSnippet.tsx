import React from 'react'
import CodeSnippet from '../../../common/CodeSnippet'

export default function InferringdimensionCodeSnippet() {
    return (
        <CodeSnippet
        full_code={`
        <Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
        `}
        simple_code={`
        <Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
        `}
      />
    )
}


