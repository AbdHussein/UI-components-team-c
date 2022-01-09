import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button/Button";
import Dialog from "../Dialog";
import DailogAction from "../DialogAction/DailogAction";
import DialogContent from "../DialogContent/DialogContent";
import DialogTitle from "../DialogTitle/DialogTitle";

const Select = styled.select`
  height: 32px;
  width: 100px;
  text-align: center;
  margin: 15px 0;
  font-size: 22px;
`;

const SelectOptions = [
  { key: "false", value: "false" },
  { key: "xs", value: "xs" },
  { key: "sm", value: "sm" },
  { key: "md", value: "md" },
  { key: "lg", value: "lg" },
  { key: "xl", value: "xl" },
];

const DialogEx = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [maxWidth, setMaxWidth] = useState<string>(SelectOptions[1].value);

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    setMaxWidth(e.target.value);
  };
  useEffect(() => {
    // console.log('maxWidth --->', maxWidth)
  });
  return (
    <>
      <Button title="Open Dialog" onClickHandler={() => setDisplay(true)} />
      <Dialog
        isOpen={display}
        onClose={() => setDisplay(false)}
        maxWidth={maxWidth}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <h3>You can set my maximum width and whether to adapt or not.</h3>
          <label style={{ marginRight: "10px" }}>Max Width: </label>
          <Select value={maxWidth} onChange={(e) => selectChange(e)}>
            {SelectOptions.map((opt) => (
              <option key={opt.key} value={opt.value}>
                {" "}
                {opt.value}{" "}
              </option>
            ))}
          </Select>
        </DialogContent>
        <DailogAction>
          <Button title="colse" onClickHandler={() => setDisplay(false)} />
        </DailogAction>
      </Dialog>
    </>
  );
};

export default DialogEx;
