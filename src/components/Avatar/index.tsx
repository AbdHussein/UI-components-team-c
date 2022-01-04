import { ReactNode, ElementType } from 'react'
import { CSSProperties } from 'styled-components'
import { Container } from './styles'

interface IAvatar{
    variant: 'circular'|'rounded'|'square'|string
    alt?: string
    children?: ReactNode
    component?: ElementType
    sx?: CSSProperties
    src?: string
    srcSet?: string
    imgProps?: object
}

const Index = (props: IAvatar) => {
    return (
        <Container as={props?.component}>
            {
                props?.src && <img {...props?.imgProps} src={props?.src} alt={props?.alt} srcSet={props?.srcSet}/>
            }
            {
                !props?.src && props?.children
            }
        </Container>
    )
}
export default Index