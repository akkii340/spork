import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Avatar, IconButton, Tooltip, Menu, MenuItem, Checkbox } from "@material-ui/core";
import Context from "./Context";
import { People, Style } from "@material-ui/icons";
import { withRouter, Link ,NavLink} from "react-router-dom";
import './Nav.css'
function Nav({ history }) {
  const ctx = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(path) {
    history.push(path);
    setAnchorEl(null);
  }

  function handleLogout() {
    ctx.dispatch({ type: "logout" });
    handleClick("/login");
  }

  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar className="Toolbar">
        <Link to="/login">
          <Style fontSize="large" style={{ color: "white" }} />
        </Link>
        <NavLink 
            to="/add"
            >Add
          </NavLink>
          <NavLink 
            to="/view"
            >View
          </NavLink>
        <div style={{ flexGrow: 1 }} />
        {ctx.auth.id ? (
          <>
            <Tooltip title="Users">
              <IconButton component={Link} to="/users">
                <People style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            {ctx.auth.id && (
              <>
                <Avatar src={ctx.auth.pic} onClick={e => setAnchorEl(e.currentTarget)} />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  className="nav-menu"
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleClick("/profile")}>Profile</MenuItem>
                  <MenuItem>
                    Make profile public
                    <Checkbox color="secondary" checked style={{ marginLeft: 10 }} />
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Nav);
