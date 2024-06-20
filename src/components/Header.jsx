import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  ///className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  return (
    <div>
      <nav className="border-gray-200 bg-white pb-10">
        <div className="flex flex-wrap items-center justify-between mx-9 pt-4">
          <Link className="flex items-center" to={"/"}>
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:text-blue-700 focus:outline-none focus:ring-2 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar position="fixed" open={open}>
                <Toolbar className="bg-white justify-end">
                  <IconButton
                    className="items-end"
                    color="black"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                  },
                }}
                variant="persistent"
                anchor="right"
                open={open}
              >
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </DrawerHeader>
                <List className="bg-white">
                  <ul className="font-medium text-lg">
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-black bg-white  md:hover:bg-transparent md:border-0 md:p-0"
                        to={"/"}
                        onClick={handleDrawerClose}
                      >
                        HOME
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-black bg-white  md:hover:bg-transparent md:border-0 md:p-0"
                        to={"/hospitales"}
                        onClick={handleDrawerClose}
                      >
                        HOSPITALS
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-black bg-white  md:hover:bg-transparent md:border-0 md:p-0"
                        to={"/solicitudes"}
                        onClick={handleDrawerClose}
                      >
                        REQUESTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-black bg-white  md:hover:bg-transparent md:border-0 md:p-0"
                        to={"/entregas"}
                        onClick={handleDrawerClose}
                      >
                        DELIVERIES
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-black bg-white  md:hover:bg-transparent md:border-0 md:p-0"
                        to={"/insumos"}
                        onClick={handleDrawerClose}
                      >
                        SUPPLIES
                      </Link>
                    </li>
                  </ul>
                </List>
              </Drawer>
            </Box>
          </button>

          <div
            className="hidden w-full md:block md:w-auto uppercase"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={"/"}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={"/hospitales"}
                >
                  HOSPITALs
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={"/solicitudes"}
                >
                  requests
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={"/entregas"}
                >
                  deliveries
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={"/insumos"}
                >
                  supplies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
