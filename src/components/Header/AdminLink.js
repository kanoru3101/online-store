import { Link } from "react-router-dom";
import { routes } from "../../routes";
import Typography from "@material-ui/core/Typography";
import s from "./Header.module.css";
import React from "react";

const AdminLink = ({ token, user }) => {
  if (token !== null && user && user.role === "admin") {
    return (
      <Link to={routes.admin}>
        <Typography variant="h6" color={"secondary"} className={s.typography}>
          Admin
        </Typography>
      </Link>
    );
  }
  return <div />;
};

export default AdminLink;
