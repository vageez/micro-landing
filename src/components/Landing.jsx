import React, { useEffect } from "react";
import { Rotator } from "rotator/Rotator";
import useAppStore from "host/StateService";
import { useTheme } from "@mui/material/styles";

const ButtonComponent = () => {
  const theme = useTheme();
  console.log("Landing Page Button theme", theme);
  return <Button variant="contained">Hello World Langing</Button>;
};
export default () => {
  const setMicro = useAppStore((state) => state.setMicro);

  useEffect(() => {
    setMicro("landing");
  }, []);

  return (
    <div style={{ border: "1px solid red", margin: "2px" }}>
      <h1>Landing Page App</h1>
      <ButtonComponent />
      <Rotator />
    </div>
  );
};
