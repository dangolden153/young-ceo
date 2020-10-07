import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container  = styled.div`

`

export const Text_con  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50%;

`
export const Text  = styled.div`
font-size: 20px;
font-family:'Roboto', sans-serif ;
font-weight: normal;
font-style:normal ;
padding: 20px;
`


export const Text_Link  = styled(Link)`
text-decoration: none;
color: white


`