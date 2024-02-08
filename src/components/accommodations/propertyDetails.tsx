import React from "react";
import SideBar from "../propertyDetails/sideBar";
import PropertyDetailsBody from "./propertyDetailsBody";

export default async function PropertyDetails() {
	return (
		<div className="flex">
			<SideBar />
			<PropertyDetailsBody />
		</div>
	);
}
