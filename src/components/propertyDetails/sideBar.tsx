"use client";
import React from "react";
import { ArrowLeft, Pencil } from "lucide-react";
import { useGetPropertyDetailsQuery } from "@/app/redux/services/apiServices";
import { DateRange, House } from "@mui/icons-material";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { setPropertyDetails } from "@/app/redux/slices/propertySlice";

export default function SideBar({}) {
	const dispatch = useDispatch();
	const { getLocalStorage } = useLocalStorage();
	const [userData, setUserData] = React.useState<{
		_id: string;
		username: string;
		accessToken: string;
		propertyId: string;
	}>({ _id: "", username: "", accessToken: "", propertyId: "" });
	const { data } = useGetPropertyDetailsQuery({
		_id: userData._id,
		accessToken: userData.accessToken,
		propertyId: userData.propertyId,
		username: userData.username,
	});
	React.useEffect(() => {
		const propertyId =
			window.location.pathname.split("/")[
				window.location.pathname.split("/").length - 1
			];
		if (window !== undefined && window.localStorage) {
			setUserData({
				_id: getLocalStorage("_id"),
				accessToken: getLocalStorage("accessToken"),
				propertyId: propertyId,
				username: getLocalStorage("username"),
			});
		}
		if (data?.success) {
			dispatch(setPropertyDetails({ ...data.data }));
		}
	}, [data, dispatch]);

	return (
		<div className="w-[280px] mr-12">
			<div className="flex justify-between bg-primary-dark-green mb-5">
				<button className="border-none bg-transparent text-primary-lightgreen text-sm flex items-center py-5 px-6 gap-2">
					<ArrowLeft color="#CCE6E7" /> Back
				</button>
				<button className="border-none bg-transparent text-primary-lightgreen text-sm flex items-center py-5 px-6 gap-2">
					<Pencil size={25} fill="#CCE6E7" stroke="black" />
					Edit
				</button>
			</div>
			<div className="flex flex-col items-center gap-3 p-3 shadow-md">
				<div
					className={
						"flex flex-col items-center gap-4 w-full py-3 px-3 group hover:bg-primary-lightgreen"
					}
				>
					<h3 className="font-semibold text-lg  w-full">Location</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="w-full">
						Federal Housing Estate, Number 49 East-End, Jos, Plateau State,
						Nigeria.
					</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full py-3 px-3 group hover:bg-primary-lightgreen"
					}
				>
					<h3 className="font-semibold text-lg w-full">
						Reason for listing this accommodation
					</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="w-full">
						To offer guests an interesting and enriching experience that makes a
						holiday memorable for all the right reasons.
					</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full py-3 px-3 group hover:bg-primary-lightgreen"
					}
				>
					<h3 className="font-semibold text-lg w-full">Hosting Duration</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="flex gap-2 w-full">
						<DateRange htmlColor="#03796E" />
						Fri 18 Nov - Fri 16 Dec
					</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full py-3 px-3 group hover:bg-primary-lightgreen"
					}
				>
					<h3 className="font-semibold text-lg w-full">Accommodation Type</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="flex gap-2 w-full">
						<House htmlColor="#03796E" />
						Fri 18 Nov - Fri 16 Dec
					</p>
				</div>
			</div>
		</div>
	);
}
