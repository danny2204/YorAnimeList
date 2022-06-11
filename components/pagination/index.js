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
        <button key={-1} onClick={previous}> {String.fromCharCode(243)} </button>
    )
    
    if (currentPage > 2) {
        buttons.push(
            <button key={1} onClick={() => goTo(1)}>1</button>
        )
    }

    if (currentPage - 1 > 0) {
        buttons.push(
            <button key={currentPage-1} onClick={() => goTo(currentPage-1)}> {currentPage-1} </button>
        )
        buttons.push(
            <button key={currentPage} onClick={() => goTo(currentPage)}> {currentPage} </button>
        )
        buttons.push(
            <button key={currentPage+1} onClick={() => goTo(currentPage+1)}> {currentPage+1} </button>
        )
    } else {
        buttons.push(
            <button key={currentPage} onClick={() => goTo(currentPage)}> {currentPage} </button>
        )
        buttons.push(
            <button key={currentPage+1} onClick={() => goTo(currentPage+1)}> {currentPage+1} </button>
        )
    }

    buttons.push(
        <button key={-2} onClick={next}> {String.fromCharCode(244)} </button>
    )

    return(
        <div>
            {buttons.map(function(b) {
                return(b);
            })}
        </div>
    );
}