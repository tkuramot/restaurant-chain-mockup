type BasicUser = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	address: string;
	birth_date: string;
	membership_expiration_date: string;
	role: string;
};

type BasicUsers = BasicUser[];

export type { BasicUser, BasicUsers };
