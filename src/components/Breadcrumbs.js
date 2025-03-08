import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
      <Link to="/" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
        ホーム
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return index === pathnames.length - 1 ? (
          <Typography key={to} color="textPrimary">{decodeURIComponent(value)}</Typography>
        ) : (
          <Link key={to} to={to} style={{ textDecoration: "none", color: "#1976d2" }}>
            {decodeURIComponent(value)}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
