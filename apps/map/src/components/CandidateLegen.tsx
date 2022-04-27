import React from 'react';
import { useContext } from 'react';
import { DEFAULT_CANDIDATE_COLOR } from '../constants/candidate';
import { presetContext } from '../contexts/preset';
import { Candidate } from '../models/candidate';
import { Result } from '../models/election';

interface Props {
  candidates: Candidate[],
	children: React.ReactNode;
}

export default function CandidateLegen({ candidates, children }: Props) {
	const preset = useContext(presetContext);

	if (!preset) return <></>;

	const other: Candidate = {
		id: '-1',
		fullname: 'อื่นๆ',
		shortname: 'อื่นๆ',
		color: DEFAULT_CANDIDATE_COLOR
	};

	return (
		<div class="flex flex-row md:flex-col gap-2">
			<div class="flex flex-row gap-2 md:gap-4">
				{(candidates.length > 3 ? [...candidates.slice(0, 3), other] : candidates).map(
					(c: Candidate) => (
						<div class="flex gap-1 items-center">
							<span class="w-2 md:w-3 h-2 md:h-3" style={{ backgroundColor: c.color }}></span>
							<span class="typo-u4">{c.shortname}</span>
						</div>
					)
				)}
				<div class="flex flex-row gap-2">
					<div class="border md:hidden opacity-30" />
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="block md:hidden self-center"
					>
						<path
							d="M7.24975 5.75H8.74975V4.25L7.24975 4.25V5.75ZM7.99975 14C4.69226 14 1.99976 11.3075 1.99976 8C1.99976 4.6925 4.69226 2 7.99975 2C11.3073 2 13.9998 4.6925 13.9998 8C13.9998 11.3075 11.3073 14 7.99975 14ZM7.99975 0.5C7.01484 0.5 6.03957 0.693993 5.12963 1.0709C4.21969 1.44781 3.39289 2.00026 2.69645 2.6967C1.28993 4.10322 0.499756 6.01088 0.499756 8C0.499756 9.98912 1.28993 11.8968 2.69645 13.3033C3.39289 13.9997 4.21969 14.5522 5.12963 14.9291C6.03957 15.306 7.01484 15.5 7.99975 15.5C9.98888 15.5 11.8965 14.7098 13.3031 13.3033C14.7096 11.8968 15.4998 9.98912 15.4998 8C15.4998 7.01509 15.3058 6.03981 14.9289 5.12987C14.5519 4.21993 13.9995 3.39314 13.3031 2.6967C12.6066 2.00026 11.7798 1.44781 10.8699 1.0709C9.95994 0.693993 8.98467 0.5 7.99975 0.5ZM7.24975 11.75H8.74975V7.25H7.24975L7.24975 11.75Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			<div class="hidden md:flex">{children}</div>
		</div>
	);
}
