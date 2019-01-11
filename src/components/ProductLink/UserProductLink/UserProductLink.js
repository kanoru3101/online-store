import React from "react";
import { string } from "prop-types";
import { compose, withHandlers, withState } from "recompose";
import UserProductLinkView from "./UserProductLinkView";

const UserProductLink = props => <UserProductLinkView {...props} />;

const enhance = compose(
  withState("hover", "handleHover", false),
  withHandlers({
    hoverOn: props => () => {
      props.handleHover(true);
    },
    hoverOff: props => () => {
      props.handleHover(false);
    }
  })
);

UserProductLink.propTypes = {
  id: string.isRequired,
  title: string.isRequired
};

export default enhance(UserProductLink);
