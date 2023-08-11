import { AppBar, Box, Toolbar, Button, Paper, Typography } from "@mui/material";
import HubIcon from "@mui/icons-material/Hub";
import { Link } from "react-router-dom";

const Navbar = (prop) => {
  let { buttonData } = prop.navlink;
  let whiteBackground = ["Admin", "User", "Login", "SignUp", "Logout"];
  return (
    <>
      <Paper elevation={24}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ backgroundColor: "black" }}>
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                TVT
                <HubIcon />
              </Typography>

              <div style={{ display: "flex", gap: "15px" }}>
                {buttonData?.map((x, index) => (
                  <>
                    <Button
                      key={index}
                      variant={"contained"}
                      style={{
                        backgroundColor: whiteBackground.includes(x[1])
                          ? "white"
                          : "black",
                      }}
                      mr="5"
                      onClick={x[2] ? x[2] : null}
                    >
                      <Link
                        to={x[0]}
                        style={{
                          textDecoration: "none",
                          color: whiteBackground.includes(x[1])
                            ? "black"
                            : "white",
                        }}
                      >
                        {x[1]}
                      </Link>
                    </Button>
                  </>
                ))}
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </Paper>
    </>
  );
};

export default Navbar;
