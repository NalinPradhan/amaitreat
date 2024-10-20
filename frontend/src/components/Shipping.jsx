import * as React from "react";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";

export default function Shipping() {
  return (
    <div className="lg:ml-64">
      <Stepper orientation="vertical">
        <Step
          indicator={
            <StepIndicator variant="soft" color="success">
              1
            </StepIndicator>
          }
        >
          <Typography>Order Placed</Typography>

          <Stack spacing={1}>
            <Typography level="body-sm">
              RST Colony
              <br />
              Changzamtog <br />
              Thimphu, Bhutan
            </Typography>
          </Stack>
        </Step>
        <Step indicator={<StepIndicator>2</StepIndicator>}>
          <div>
            <Typography level="title-sm">Order Dispatched</Typography>
            <Typography level="body-xs">Pending</Typography>
          </div>
        </Step>
        <Step indicator={<StepIndicator>3</StepIndicator>}>
          <div>
            <Typography level="title-sm">Delivered</Typography>
            <Typography level="body-xs">Pending</Typography>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
