type User = {
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

type Users = User[];

export type { User, Users };
