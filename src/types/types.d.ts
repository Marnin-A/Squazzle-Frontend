export type PopupSeverity =
	| "success"
	| "info"
	| "warning"
	| "error"
	| undefined;

export type Passwords = {
	password: string;
	confirmPassword: string;
	acceptPolicy: boolean;
};

export type AlertType = {
	severity: PopupSeverity;
	title: string;
	message: string;
	open: boolean;
	container?: Element | ((element: Element) => Element) | null | undefined;
};

export type Popup = { state: boolean; message: string; type: PopupSeverity };

export type SimulatedResponse = {
	data: {
		message: string;
		status: "success";
	};
};
export type SimulatedOTPResponse = {
	data: {
		message: string;
	};
	status: "success" | "error" | "idle" | "pending";
	isError: boolean;
	isSuccess: boolean;
};
export type Endpoint =
	| "/api/v1/auth/signup"
	| "/api/v1/auth/activateAccount"
	| "/api/v1/auth/resendOTP"
	| "/api/v1/auth/signIn"
	| "/api/v1/auth/resetPassword"
	| "/api/v1/auth/refreshToken";

// email:auduweb@gmail.com, password:WeuI#u3u
// $2b$12$Kbp0cT;
