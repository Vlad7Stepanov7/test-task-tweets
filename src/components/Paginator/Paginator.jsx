import { useState } from "react";
import { StyledPaginator } from "./Paginator.styled";
import ListOfTweets from "components/ListOfTweets/ListOfTweets";

function Paginator({ itemsPerPage, tweets }) {

  const [itemOffset, setItemOffset] = useState(0);

 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = tweets.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tweets.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tweets.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListOfTweets currentItems={currentItems} />
      <StyledPaginator
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Paginator;