import React from "react";
import { useDispatch } from "react-redux";
import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next13-progressbar";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import ImageCard from "./imageCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useListAccommodationMutation } from "@/app/redux/services/apiServices";

type GalleryFormType = Array<string | undefined>;
type CreateAccommodationResponse =
	| { data: any }
	| {
			error: {
				data: { success: false; error: string; message: string };
				status: number;
			};
	  };

export default function GalleryForm() {
	const router = useRouter();
	const alertId = React.useId();
	const dispatch = useDispatch();
	// Form validation from React Hook Form
	const { handleSubmit } = useForm<GalleryFormType>({
		criteriaMode: "all",
		reValidateMode: "onChange",
	});
	const [imgArray, setImgArray] = React.useState<
		Array<{ name: string; url: string } | undefined>
	>([{ name: "", url: "" }]);
	const { setLocalStorage, getLocalStorage } = useLocalStorage();
	const [listAccommodation, { isError, isLoading, isSuccess, data, error }] =
		useListAccommodationMutation();

	const onSubmit: SubmitHandler<FieldValues> = async () => {
		// Send Data to API
		const overview = getLocalStorage("accommodationOverview");
		const description = getLocalStorage("descriptionForm");
		const gallery = getLocalStorage("galleryForm");
		console.log({ ...overview, ...description, ...gallery });

		const formData = new FormData();
		for (const key in overview) {
			if (Object.prototype.hasOwnProperty.call(overview, key)) {
				formData.append(key, overview[key]);
				console.log(key, ":", overview[key]);
			}
		}
		for (const key in description) {
			if (Object.prototype.hasOwnProperty.call(description, key)) {
				formData.append(key, description[key]);
				console.log(key, ":", description[key]);
			}
		}
		gallery.forEach((element: { name: string; url: string }) => {
			const image = new Blob([element?.url], {
				type: `image/${getImageType(element.url)}`,
			});
			formData.append("images", image);
			console.log("image", image);
		});

		const res = (await listAccommodation({
			formData: formData,
			token: getLocalStorage("accessToken"),
		})) as unknown as CreateAccommodationResponse;
		console.log(res);
		// console.log(data);
		// console.log(error);
		// console.log(isLoading);
		// for (const key of formData.keys()) {
		// 	console.log(key);
		// }

		if ("error" in res) {
			const { error } = res;
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message: error.data.error,
				})
			);
		}
		if ("data" in res) {
			const { data } = res;
			console.log(data);
			formData.forEach((item) => console.log(item));
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "success",
					title: "success",
					message: "success",
				})
			);
		}
		// setTimeout(() => {
		// 	router.push("/manageAccount/myListing");
		// }, 500);
	};

	function addPictureCard() {
		if (getLocalStorage("galleryForm")) {
			const images = getLocalStorage("galleryForm") as Array<
				{ name: string; url: string } | undefined
			>;
			images.concat({ name: "", url: "" });
			setLocalStorage("galleryForm", images);
			setImgArray([...images]);
		} else {
			setLocalStorage("galleryForm", [{ name: "", url: "" }]);
		}
		setImgArray(imgArray.concat({ name: "", url: "" }));
	}

	function getImageType(imgUrl: string) {
		const regex = /\/(.*?);/;
		const match = regex.exec(imgUrl);

		// Check if a match is found
		if (match && match[1]) {
			return match[1];
		} else {
			return null; // Return null if no match is found
		}
	}

	function handleBack() {
		router.back();
	}
	React.useEffect(() => {
		if (getLocalStorage("galleryForm")) {
			setImgArray(getLocalStorage("galleryForm"));
		} else {
			setImgArray([{ name: "", url: "" }]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<form
				name="galleryForm"
				className="bg-transparent w-full pt-6 p-10 flex flex-col gap-6 shadow-sm"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Options */}
				<div className="flex items-center justify-between">
					<button
						onClick={addPictureCard}
						className="flex gap-2 items-center bg-primary-mid-green text-off-white text-sm py-5 px-6"
					>
						<PlusCircleIcon />
						Add photo
					</button>{" "}
					<div>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Select all
						</Button>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Delete all
						</Button>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Hide from gallery
						</Button>
						<Button
							variant={"ghost"}
							className="text-primary-grey text-sm hover:text-black"
						>
							Delete
						</Button>
					</div>
				</div>
				{/* Gallery */}
				<div className="flex flex-wrap gap-5 mb-16 h-full">
					{imgArray.map((data) => (
						<ImageCard
							index={imgArray.indexOf(data)}
							key={data?.name}
							url={data?.url}
							imgArray={imgArray}
							setNewImg={setImgArray}
						/>
					))}
				</div>
				{/* Buttons */}
				<div className="flex items-center justify-between ">
					<button
						className="w-max hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-4 px-6 rounded-md"
						type="button"
						onClick={handleBack}
					>
						Back
					</button>
					<button
						className="w-max hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-4 px-6 rounded-xl"
						type="submit"
						formTarget="galleryForm"
					>
						<span>Save</span>
					</button>
				</div>
			</form>
		</>
	);
}
