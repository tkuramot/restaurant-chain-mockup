import useFetchData from "@/hooks/useFetchData";
import type { Companies } from "@/types/Company";

function CompaniesList() {
	const companies = useFetchData<Companies>("/api/companies");
	return (
		<ul>
			{companies?.map((company) => (
				<li key={company.name}>
					<h2>{company.name}</h2>
					<p>Industry: {company.industry}</p>
					<p>Country: {company.country}</p>
					<p>
						Website: <a href={company.website}>{company.website}</a>
					</p>
				</li>
			))}
		</ul>
	);
}

export default CompaniesList;
