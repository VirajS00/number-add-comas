interface add_commas_args {
	n: number;
	system?: "IND" | "INT";
}

export const add_commas = ({ n, system }: add_commas_args): string => {
	const str = n.toString();
	const regex: RegExp =
		system === "IND"
			? /\B(?=(\d{2})+.(?!(\d{1})))+(?=(\d{2})+(?!(\d{3})))/g
			: /\B(?=(\d{3})+(?!\d))/g;

	const spl = n % 1 != 0 ? str.split(".") : str;

	const number =
		n % 1 != 0
			? spl[0].replace(regex, ",") + "." + spl[1]
			: str.replace(regex, ",");

	return number;
};
