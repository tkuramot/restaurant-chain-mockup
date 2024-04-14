type Company = {
	name: string;
	founding_year: number;
	description: string;
	website: string;
	phone: string;
	industry: string;
	ceo: string;
	is_publicly_traded: boolean;
	country: string;
	founder: string;
	total_employees: number;
};

type Companies = Company[];

export type { Company, Companies };
