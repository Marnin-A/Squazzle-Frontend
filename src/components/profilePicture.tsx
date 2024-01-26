import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useLocalStorage from "@/hooks/useLocalStorage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ProfilePicture({
	className,
	height,
	width,
}: {
	className?: string | undefined;
	height: number;
	width: number;
}) {
	const { getLocalStorage } = useLocalStorage();
	const [pictureURL, setPictureURL] = React.useState("");
	const [imageLoaded, setImageLoaded] = React.useState(false);
	const [hasProfilePicture, setHasProfilePicture] = React.useState(false);

	React.useEffect(() => {
		if (window !== undefined && window.localStorage) {
			setHasProfilePicture(Boolean(getLocalStorage("profileImage")));
			setPictureURL(getLocalStorage("profileImage"));
		}
	}, [getLocalStorage]);
	return (
		<>
			{hasProfilePicture ? (
				imageLoaded ? (
					<AccountCircleIcon
						htmlColor="#016D71"
						color="inherit"
						className={cn(`min-w-[${width}px] min-h-[${height}px]`, className)}
					/>
				) : (
					<Image
						src={pictureURL}
						alt={"User Profile Picture"}
						width={width}
						height={height}
						placeholder="empty"
						priority={false}
						className={cn("w-min h-auto rounded-full m-auto", className)}
						onError={() => setImageLoaded(true)}
					/>
				)
			) : (
				<AccountCircleIcon
					htmlColor="#016D71"
					color="inherit"
					className={cn(`min-w-[${width}px] min-h-[${height}px]`, className)}
				/>
			)}
		</>
	);
}
