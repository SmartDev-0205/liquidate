import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/images/logo.png";
import mdiWorld from "../../assets/icons/mdi_world.svg";
import mdiQuestion from "../../assets/icons/mdi_question-mark-circle-outline.svg";
import { hover } from "@testing-library/user-event/dist/hover";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "white",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    backgroundColor: "#0F131F",
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const Header = (props) => {
  const [navLink, setNavLink] = useState<string>("Lending");
  const [netState, setNetState] = useState<string>("Mainnet-NodeReak");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [navVisible, setNavVisible] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };
  return (
    <nav className="fixed top-0 left-0 w-full h-60 px-10 md:px-20 mm:px-30  flex flex-row-reverse mm:flex-row gap-50 items-center justify-between mm:justify-normal  bg-header z-10">
      {/* Hamburger button At the end */}
      <div
        className="w-30 h-30 cursor-pointer block mm:hidden"
        onClick={toggleNav}
        aria-controls={open ? "site-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <svg viewBox="0 0 48 48">
          <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#6f7380" />
          <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#6f7380" />
          <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#6f7380" />
        </svg>
      </div>
      <div className={`${navVisible ? "absolute top-[60px] w-[100vw] mr-[-10px] flex flex-col items-center text-center bg-[#313437]" : "hidden"} mm:hidden text-white font-[600]`}>
        <MenuItem
          onClick={() => {
            toggleNav()
          }}
          disableRipple
        >
          <Link to="/">Lending</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleNav()
          }}
          disableRipple
        >
          <Link to="/*">Swap</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleNav()
          }}
          disableRipple
        >
          <Link to="/">Bridge</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleNav()
          }}
          disableRipple
        >
          <Link to="/">Dashboard</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleNav()
          }}
          disableRipple
        >
          <Link to="/trading">Trading</Link>
        </MenuItem>
      </div>
      <img
        src={logo}
        alt="logo"
        className="hidden mm:flex w-[30px] md:w-[40px] mm:w-[50px]"
      />
      <button className="bg-btn mm:hidden rounded-[9px] px-[20px] py-[13px] hover:bg-btnHover text-[14px] text-black font-[600]">
        Connect Wallet
      </button>

      <div className="hidden mm:flex w-[100vw] justify-between">
        <div className="flex flex-row gap-10 md:gap-30 lg:gap-50 items-center">
          <span
            className={`text-12 md:text-14 font-semibold cursor-pointer ${
              navLink === "Lending" ? "text-white" : "text-link"
            } hover:text-white`}
            onClick={() => {
              setNavLink("Lending");
            }}
          >
            <Link to="/">Lending</Link>
          </span>
          <span
            className={`text-12 md:text-14 font-semibold cursor-pointer ${
              navLink === "Swap" ? "text-white" : "text-link"
            } hover:text-link`}
            onClick={() => {
              setNavLink("Swap");
            }}
          >
            <Link to="/*">Swap</Link>
          </span>
          <span
            className={`text-12 md:text-14 font-semibold cursor-pointer ${
              navLink === "Bridge" ? "text-white" : "text-link"
            } hover:text-link`}
            onClick={() => {
              setNavLink("Bridge");
            }}
          >
            <Link to="/*">Bridge</Link>
          </span>
          <span
            className={`text-12 md:text-14 font-semibold cursor-pointer ${
              navLink === "Dashboard" ? "text-white" : "text-link"
            } hover:text-link`}
            onClick={() => {
              setNavLink("Dashboard");
            }}
          >
            <Link to="/*">Dashboard</Link>
          </span>
          <span
            className={`text-12 md:text-14 font-semibold cursor-pointer ${
              navLink === "Trading" ? "text-white" : "text-link"
            } hover:text-link`}
            onClick={() => {
              setNavLink("Trading");
            }}
          >
            <Link to="/*">Trading</Link>
          </span>
        </div>
        <div className="flex flex-row gap-10 items-center">
          <img src={mdiWorld} alt="world" className="p-[9px]" />
          <img src={mdiQuestion} alt="world" className="p-[9px]" />

          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ backgroundColor: "#0F131F","&:hover": {
                background: "#0F131F"
              },}}
          >
            {netState}
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            color="red"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                setNetState("Mainnet-NodeReak");
              }}
              disableRipple
            >
              Mainnet-NodeReak
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setNetState("Testnet-NodeReak");
              }}
              disableRipple
            >
              Testnet-NodeReak
            </MenuItem>
          </StyledMenu>
          <button className="bg-btn rounded-[9px] px-[20px] py-[13px] hover:bg-btnHover text-[14px] text-black font-[600]">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};
