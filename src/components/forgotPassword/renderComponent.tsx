import ForgotPasswordCard from "./forgotPasswordCard";
import ForgotPasswordSuccess from "./forgotPasswordSuccess";
import PasswordOtpCard from "./passwordOtpCard";
import ManageSearchParams from "@/hooks/updateSearchParams";
import NewPasswordCard from "./newPasswordCard";
import ResetPasswordSuccess from "./resetPasswordSuccess";

export default function RenderComponents() {
	const { getURLParam } = ManageSearchParams();
	const view = getURLParam("view");
	console.log(view);
	return (
		<>
			{view === "forgotPasswordSuccess" ? (
				<ForgotPasswordSuccess />
			) : view === "enterOTP" ? (
				<PasswordOtpCard />
			) : view === "newPassword" ? (
				<NewPasswordCard />
			) : view === "resetPasswordSuccess" ? (
				<ResetPasswordSuccess />
			) : (
				<ForgotPasswordCard />
			)}
		</>
	);
}
