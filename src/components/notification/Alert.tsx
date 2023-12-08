import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AlertType } from "@/types/types";
import Slide from "@mui/material/Slide";

export default function AlertPopup({
	severity,
	title,
	message,
	open,
	alertId,
}: AlertType) {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	React.useEffect(() => {
		// Open popup
		if (open) setIsOpen(true);

		// Close popup
		setTimeout(() => setIsOpen(false), 5000);
	}, [open]);

	return (
		<Slide
			id={alertId}
			direction="down"
			in={isOpen}
			mountOnEnter
			unmountOnExit
			className={isOpen ? "block absolute top-14" : "hidden"}
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
