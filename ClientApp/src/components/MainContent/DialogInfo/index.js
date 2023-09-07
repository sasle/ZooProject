import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function DialogInfo({ open, handleClose, name, description }) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>More information about {name}s</DialogTitle>
      <DialogContent>
        <p>{description}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
