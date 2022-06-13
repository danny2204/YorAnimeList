/** @jsxImportSource @emotion/react */
import { Container, SmallLabel } from "../style";
import {css} from '@emotion/react';

export default function SmallInformation(props) {
    const {
        label,
        content,
        ...attr
    } = props;
    return (
        <Container css={css`
            padding: 0 1rem;
        `}>
            <SmallLabel>{label}</SmallLabel>
            <div css={css`
                display: flex;
                align-items: flex-end;
                justify-content: center;
            `}>
                <h1 css={css`
                    font-size: 2rem;
                `}> {content} </h1>{attr.threshold}
            </div>
        </Container>
    )
}