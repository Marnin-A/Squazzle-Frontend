import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
type AlertProps = {
	severity: "success" | "info" | "warning" | "error";
	title: string;
	message: string;
};
export default function AlertPopup({ severity, title, message }: AlertProps) {
	return (
		<Alert severity={severity}>
			<AlertTitle>{title}</AlertTitle>
			{message}
		</Alert>
	);
}
