/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import Link from 'next/link'
import {
    Card as Cards, CardBody, Image, Title
} from '../template/style'

export default function Card(props) {

    const {
        image,
        title,
        season,
        episode,
        id,
        ...attr
    } = props;

    const Card = Cards;

    return(
        <>
            {props.children}
            <Link href = {{
                pathname: '/details/[id]',
                query: {id: id}
            }}>
                <Card css={css`
                    ${attr.style}
                `}>
                    <Image src={image} />
                    <div css={css`
                        padding: 1vh 1vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        height: 20%;
                        width: 100%;
                    `}>
                        <Title>{title}</Title>
                        <CardBody>
                            <p>Season : {season}</p>
                            <p>Episodes : {episode} </p>
                        </CardBody>
                    </div>
                </Card>
            </Link>
            {attr.removeButton}
        </>
    )
}