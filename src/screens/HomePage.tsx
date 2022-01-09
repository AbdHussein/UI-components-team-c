import React from "react";
import Header from "../components/common/Header";
import FormDialog from '../components/Dialog/DialogUseCases/FormDialog'

interface IProps{
  theme: string;
  toggleTheme: () => void;
}

export default function HomePage({ toggleTheme, theme}: IProps) {
  return (
    <>
      <Header themee={theme} toggleTheme={toggleTheme} />
      <FormDialog />
    </>
  );
}
