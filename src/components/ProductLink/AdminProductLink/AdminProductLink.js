import React from "react";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { routes } from "../../../routes";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

const styles = {
  container: {
    marginBottom: 10,
    marginTop: 10,
    background: "#e9e7f4"
  },
  image: {
    maxHeight: 50,
    width: "auto",
    margin: "0 auto"
  },
  link: {
    textDecoration: "none",
    color: "#3f51b5"
  }
};

const AdminProductLink = ({
  id,
  title,
  image,
  description,
  price,
  deleteProduct
}) => {
  return (
    <Card style={styles.container}>
      <CardContent>
        <Grid container spacing={16} alignItems={"center"}>
          <Grid item xs={2}>
            <CardMedia
              component={"img"}
              alt={title}
              image={image}
              title={title}
              style={styles.image}
            />
          </Grid>
          <Grid item xs={7}>
            <Link
              to={formatRoute(routes.productPage, { id })}
              style={styles.link}
            >
              {title}
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Grid container justify={"flex-end"}>
              <Link to={formatRoute(routes.adminProduct, { id })}>
                <Button variant="fab" color="primary" aria-label="Edit" mini>
                  <EditIcon />
                </Button>
              </Link>
              <Button
                variant="fab"
                mini
                color="secondary"
                aria-label="Delete"
                onClick={() => deleteProduct(id)}
              >
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AdminProductLink.propTypes = {
  id: string.isRequired,
  title: string.isRequired
};

export default withStyles(styles)(AdminProductLink);
