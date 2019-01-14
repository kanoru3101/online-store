import React from "react";
import IconButton from "@material-ui/core/IconButton";
import LastPageIcon from "@material-ui/icons/LastPage";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import RenderNumberButtonsPages from "./RenderNumberPages";
import { compose, withHandlers } from "recompose";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
    margin: "auto"
  },
  icon: {
    color: "#009688"
  }
});
/*
class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };
  handleTargetButtonClick = (event, value) => {
    debugger;
    this.props.onChangePage(event, value);
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
          color={"primary"}
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
          color={"primary"}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>

        <RenderNumberButtonsPages
          {...this.props}
          handleTargetButtonClick={this.handleTargetButtonClick}
        />

        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
          color={"primary"}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          color={"primary"}
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}
*/

const TablePaginationActions = props => {
  const { classes, count, page, rowsPerPage, theme } = props;

  return (
    <div className={classes.root}>
      <IconButton
        onClick={props.handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
        color={"primary"}
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={props.handleBackButtonClick}
        disabled={page === 0}
        aria-label="Previous Page"
        color={"primary"}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <RenderNumberButtonsPages
        {...props}
        handleTargetButtonClick={props.handleTargetButtonClick}
      />

      <IconButton
        onClick={props.handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
        color={"primary"}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        color={"primary"}
        onClick={props.handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};

const enhance = compose(
  withHandlers({
    handleFirstPageButtonClick: props => event => {
      props.onChangePage(event, 0);
    },
    handleBackButtonClick: props => event => {
      props.onChangePage(event, props.page - 1);
    },

    handleNextButtonClick: props => event => {
      props.onChangePage(event, props.page + 1);
    },

    handleLastPageButtonClick: props => event => {
      props.onChangePage(
        event,
        Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1)
      );
    },
    handleTargetButtonClick: props => (event, value) => {
      props.onChangePage(event, value);
    }
  })
);

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

export const TablePaginationActionsWrapped = enhance(
  withStyles(actionsStyles, {
    withTheme: true
  })(TablePaginationActions)
);
