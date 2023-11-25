export type PopupSeverity = "success" | "info" | "warning" | "error";

export type Passwords = {
	password: string;
	confirmPassword: string;
	acceptedPolicy: boolean;
};
export type AlertType = {
	severity: PopupSeverity;
	title: string;
	message: string;
};
