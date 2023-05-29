import React, { useState, useEffect } from "react";
import Switch from "@mui/joy/Switch";
import BorrowTable from "../components/borrow-table";

export const HomePage = () => {
  return (
    <div className="container bg-[#08090F] flex flex-col gap-60">
      <div className="flex flex-col">
        <p className="text-32 text-center font-[700] text-white">Liquidate</p>
        <p className="text-18 text-center font-[600] text-[#88B8D8]">
          Liquidate to earn extra reward!
        </p>
        <div className="text-18 text-center font-[400] text-white flex items-center gap-20 justify-center">
          Ignore Small Debt{" "}
          <Switch
            sx={{
              "& .MuiSwitch-track ": {
                background: "#141929",
              },
              height: "25px",
              width: "51px",
            }}
          />
        </div>
      </div>
      <BorrowTable/>
    </div>
  );
};
