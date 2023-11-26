import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AlertType } from "@/types";
import Slide from "@mui/material/Slide";

export default function AlertPopup({
	severity,
	title,
	message,
	open,
}: AlertType) {
	return (
		<Slide
			direction="down"
			in={open}
			mountOnEnter
			unmountOnExit
			className={open ? "block absolute top-14" : "hidden"}
		>
			<div>
				<Alert className="text-xl" severity={severity}>
					<AlertTitle className="text-xl">{title}</AlertTitle>
					{message}
				</Alert>
			</div>
		</Slide>
	);
}
