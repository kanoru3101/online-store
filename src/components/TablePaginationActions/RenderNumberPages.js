import IconButton from "@material-ui/core/IconButton";
import React from "react";

const RenderNumberPages = props => {
  const {
    classes,
    count,
    page,
    rowsPerPage,
    theme,
    handleTargetButtonClick
  } = props;
  const maxPage = Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1);
  const minPage = 0;
  const currentPage = page + 1; //for view
  return (
    <>
      {page - 2 > minPage ? (
        <>...</>
      ) : (
        <IconButton onClick={e => handleTargetButtonClick(e, minPage)}>
          {minPage + 1}
        </IconButton>
      )}

      {page - 1 > minPage ? (
        <IconButton onClick={e => handleTargetButtonClick(e, minPage)}>
          {currentPage - 3}
        </IconButton>
      ) : (
        <IconButton onClick={e => handleTargetButtonClick(e, minPage)}>
          {minPage + 2}
        </IconButton>
      )}

      <IconButton onClick={e => handleTargetButtonClick(e, minPage)}>
        {minPage + 3}
      </IconButton>
      <IconButton onClick={e => handleTargetButtonClick(e, page)}>
        {page}
      </IconButton>
      <IconButton onClick={e => handleTargetButtonClick(e, maxPage)}>
        {maxPage}
      </IconButton>
    </>
  );
};

export default RenderNumberPages;
