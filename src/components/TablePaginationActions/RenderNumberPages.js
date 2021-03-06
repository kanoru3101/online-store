import IconButton from "@material-ui/core/IconButton";
import React from "react";

/*create list for number buttons*/
const createButtonList = (page, rowsPerPage, count) => {
  const maxPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
  const countNumberPages = Math.ceil(count / rowsPerPage); // count buttons with numbers
  let newList = [];

  if (countNumberPages >= 5) {
    for (let i = 0; i < 5; i++) {
      if (page < 2) {
        newList.push(i);
      } else if (page >= 2 && page + 2 < maxPage) {
        newList.push(page - 2 + i);
      } else {
        newList.push(maxPage - 4 + i);
      }
    }
  }
  if (countNumberPages < 5 && countNumberPages > 0) {
    for (let i = 0; i < countNumberPages; i++) {
      newList.push(i);
    }
  }
  return newList;
};

const RenderNumberButtonsPages = props => {
  const { page, handleTargetButtonClick, rowsPerPage, count, classes } = props;
  const bntList = createButtonList(page, rowsPerPage, count);

  return (
    <>
      {bntList.map(numberPage => (
        <IconButton
          key={numberPage.toString()}
          color={numberPage === page ? "secondary" : "primary"}
          onClick={e => handleTargetButtonClick(e, numberPage)}
          className={classes.numberButtons}
        >
          {numberPage + 1}
        </IconButton>
      ))}
    </>
  );
};

export default RenderNumberButtonsPages;
