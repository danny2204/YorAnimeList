/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageTitle } from "../../template/style";

export default function Header(props) {
    const {
        title,
        ...attr
    } = props;

    return(
        <>
            <PageTitle>
                {title}
            </PageTitle>
            <hr className="divider" css={css`
                margin: 0 3rem;
            `} />
            {attr.additional}
        </>
    )
}