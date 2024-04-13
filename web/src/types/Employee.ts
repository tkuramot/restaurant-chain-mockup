import type { BasicUser } from "./User";

type Employee = BasicUser & {
  job_title: string;
  salary: number;
  start_date: string;
  awards: string[];
};

type Employees = Employee[];

export type { Employee, Employees };