import React, { useState } from "react";
import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function withSnackbar(WrappedComponent) {
  return (props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");

    function displaySnackbarSuccess(message) {
      setMessage(message);
      setSeverity("success");
      setOpenSnackbar(true);
    }

    function displaySnackbarError(message) {
      setMessage(message);
      setSeverity("error");
      setOpenSnackbar(true);
    }

    return (
      <>
        <WrappedComponent
          {...props}
          snackbarSuccess={displaySnackbarSuccess}
          snackbarError={displaySnackbarError}
        />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={5000}
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          TransitionComponent={Slide}
        >
          <Alert
            variant="filled"
            onClose={() => setOpenSnackbar(false)}
            severity={severity}
          >
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  };
}
