/** @jsxImportSource @emotion/react */
import {
    PrevButton,
    NextButton,
    CurrentPageButton,
    PageButton,
    DotsPageButton
} from "../template/style"
import {css} from "@emotion/react";

export default function Pagination(props) {
    const {
        currentPage,
        pages,
        previous,
        next,
        goTo
    } = props;

    var buttons = [];
    
    buttons.push(
        <PrevButton key={-1} onClick={previous}> {String.fromCharCode(171)} </PrevButton>
    )
    
    if (currentPage-1 > 2) {
        buttons.push(
            <PageButton key={1} onClick={() => goTo(1)}>1</PageButton>
        );
        if (currentPage >= 4) {
            buttons.push(
                <DotsPageButton key={-3}>...</DotsPageButton>
            );
        }
    }

    if (currentPage - 1 > 0) {
        buttons.push(
            <PageButton key={currentPage-1} onClick={() => goTo(currentPage-1)}> {currentPage-1} </PageButton>
        )
        buttons.push(
            <CurrentPageButton key={currentPage} onClick={() => goTo(currentPage)}> {currentPage} </CurrentPageButton>
        )
        buttons.push(
            <PageButton key={currentPage+1} onClick={() => goTo(currentPage+1)}> {currentPage+1} </PageButton>
        )
    } else {
        buttons.push(
            <CurrentPageButton key={currentPage} onClick={() => goTo(currentPage)}> {currentPage} </CurrentPageButton>
        )
        buttons.push(
            <PageButton key={currentPage+1} onClick={() => goTo(currentPage+1)}> {currentPage+1} </PageButton>
        )
    }

    if (currentPage+1 < pages) {
        buttons.push([
            <DotsPageButton key={-3}>...</DotsPageButton>,
            <PageButton key={pages} onClick={() => goTo(pages)}> {pages} </PageButton>,
        ]);        
    }
    buttons.push(
        <NextButton key={-2} onClick={next}> {String.fromCharCode(187)} </NextButton>
    );

    return(
        <div css={css`
            margin: 1.5rem 0 1.5rem 1.5rem;
        `}>
            {buttons.map(function(b) {
                return(b);
            })}
        </div>
    );
}