import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AlertType } from "@/types";

export default function AlertPopup({ severity, title, message }: AlertType) {
	return (
		<Alert severity={severity}>
			<AlertTitle>{title}</AlertTitle>
			{message}
		</Alert>
	);
}
