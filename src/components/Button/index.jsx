import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Button = ({
  className,
  to,
  primary,
  primaryInverted,
  transparent,
  children,
  ...rest
}) => {
  const classes = clsx(
    "btn",
    className,
    primary && "btn-primary",
    primaryInverted && "btn-primary-inverted",
    transparent && "btn-transparent"
  );

  let btnChilren = (
    <>
      <div className="btn-text">{children}</div>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {btnChilren}
      </Link>
    );
  } else {
    return (
      <button className={classes} {...rest}>
        {btnChilren}
      </button>
    );
  }
};

export default Button;
