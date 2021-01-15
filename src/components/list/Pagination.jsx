import React from 'react';

const Pagination=({
    pageNo,
    totalPages
})=>{
  return(
    <div>
       page {pageNo} of {totalPages}
    </div>
  )
}

export default Pagination;
