import { useState } from "react";
import { StyledPaginator } from "./Paginator.styled";
import ListOfTweets from "components/ListOfTweets/ListOfTweets";

function Paginator({ itemsPerPage, tweets, handleRefresh }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = tweets.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tweets.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tweets.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListOfTweets currentItems={currentItems} handleRefresh={handleRefresh} />
      <StyledPaginator
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName="pageBtn"
        previousClassName="arrowBtn"
        nextClassName="arrowBtn"
        pageLinkClassName="pageLink"
        previousLinkClassName="previousLink"
        nextLinkClassName="nextLink"
        
      />
    </>
  );
}

export default Paginator;