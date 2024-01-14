import React from "react";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { resetAlert } from "@/app/redux/slices/notificationSlice";

export default function AlertPopup() {
	const alertState = useSelector((state: RootState) => state.Notification);
	const dispatch = useDispatch();

	React.useEffect(() => {
		setTimeout(() => {
			dispatch(resetAlert());
		}, 5000);
	}, [alertState.open, dispatch]);

	return (
		<Slide
			id={alertState.alertId}
			direction="down"
			in={alertState.open}
			mountOnEnter
			unmountOnExit
			className={
				alertState.open
					? "flex absolute top-24 w-full justify-center items-center transform -translate-y-1/2 -translate-x-1/2 z-[999]"
					: "hidden"
			}
		>
			<div className="m-auto max-w-1/2">
				<Alert className="text-xl" severity={alertState.severity}>
					<div className="text-base">{alertState.message}</div>
				</Alert>
			</div>
		</Slide>
	);
}
