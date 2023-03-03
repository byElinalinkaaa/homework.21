import { Alert } from "@mui/material";
import { Snackbar as MuiSnackbar } from "@mui/material";

export const Snackbar = ({
  isOpen,
  onClose,
  message,
  severity,
  autoHideDuration,
}) => {
  return (
    <div>
      <MuiSnackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        message="Note archived"
        anchorOrigin={{ vertical: "top", horizontal: " right" }}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};
