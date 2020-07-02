import { Link } from "gatsby"
import { Typography, makeStyles } from '@material-ui/core';
import PropTypes from "prop-types"
import React from "react"

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
}));

const Header = ({ siteTitle, owner }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Typography variant="h2" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {`I'm ${owner.firstName} ${owner.lastName}`}
          </Link>
        </Typography>
        <Typography variant="h4" style={{ color: `white` }}>
          {siteTitle}
        </Typography>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
