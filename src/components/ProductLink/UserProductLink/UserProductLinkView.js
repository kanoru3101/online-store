import CardActions from "@material-ui/core/CardActions/CardActions";
import s from "./UserProductLink.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import { formatRoute } from "react-router-named-routes";
import { routes } from "../../../routes";

const componentStyles = {
  grid: { padding: 0 }
};

const BuyComponent = ({ item, onAddToCart, description }) => {
  return (
    <CardActions className={s.cartHover}>
      <Grid container>
        <Grid item xs={12}>
          <Button
            variant={"contained"}
            color={"primary"}
            mini
            onClick={() => onAddToCart(item)}
          >
            Add To cart
          </Button>
        </Grid>
        <Grid item xs={12} className={s.description}>
          <Typography color={"textSecondary"}>
            {description.substr(0, 50) + "..."}
          </Typography>
        </Grid>
      </Grid>
    </CardActions>
  );
};

const UserProductLinkView = ({
  id,
  title,
  image,
  description,
  price,
  onAddToCart,
  item,
  hover,
  hoverOn,
  hoverOff
}) => (
  <Grid
    item
    xs={6}
    md={4}
    lg={3}
    onMouseEnter={hoverOn}
    onMouseLeave={hoverOff}
    className={s.grid}
    style={componentStyles.grid}
  >
    <div>
      <Card className={s.container}>
        <CardActionArea>
          <Link to={formatRoute(routes.productPage, { id })}>
            <CardMedia
              component={"img"}
              alt={title}
              image={image}
              title={title}
              className={s.image}
            />
          </Link>
        </CardActionArea>
        <CardContent>
          <Link to={formatRoute(routes.productPage, { id })}>
            <Typography
              component={"h4"}
              variant={"h6"}
              className={s.titleProduct}
              align={"center"}
              color={"textPrimary"}
            >
              {title}
            </Typography>
          </Link>
          <Typography color={"primary"} align={"center"} variant={"subtitle1"}>
            {price} грн
          </Typography>
          {hover && (
            <BuyComponent
              onAddToCart={onAddToCart}
              item={item}
              description={description}
            />
          )}
        </CardContent>
      </Card>
    </div>
  </Grid>
);

export default UserProductLinkView;
