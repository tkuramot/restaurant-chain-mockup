import type { User } from "./User";

type Employee = User & {
  job_title: string;
  salary: number;
  start_date: string;
  awards: string[];
};

type Employees = Employee[];

export type { Employee, Employees };