'use client'
import { LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const CustomLocalizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
  );
};

export default CustomLocalizationProvider;
