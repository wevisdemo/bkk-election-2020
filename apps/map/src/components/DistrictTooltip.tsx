import React, { FunctionComponent, useContext } from 'react';
import { TOP_CANDIDATE_DISPLAY } from '../constants/candidate';
import { presetContext } from '../contexts/preset';
import { District } from '../models/election';

interface DistrictTooltipProps {
	show?: boolean;
	district?: District;
	topCandidateDisplay?: number;
	className?: string;
	pointUp?: boolean;
	anchorRight?: boolean;
	style?: string | JSX.CSSProperties;
}

const DistrictTooltip: FunctionComponent<DistrictTooltipProps> = ({
	show,
	pointUp,
	district,
	topCandidateDisplay = TOP_CANDIDATE_DISPLAY,
	className = '',
	anchorRight,
	style
}) => {
	const preset = useContext(presetContext);

	if (!show || !preset) return <></>;

	const displayCandidate = district
		? [...district.voting.result]
				.sort((a, z) => z.count - a.count)
				.slice(0, topCandidateDisplay)
				.map(({ candidateId, count }) => ({
					...preset.candidateMap[candidateId],
					percentage: count > 0 ? ((count / district.voting.totalVotes) * 100).toFixed(1) : 0
				}))
		: [];

	return (
		<div
			id="district-tooltip"
			className={`absolute z-10 min-w-[10rem] pointer-events-none ${className}`}
			style={style}
		>
			{pointUp && (
				<div>
					<svg width="12" height="6" viewBox="0 0 12 6" fill="none" className="ml-2">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6 0L12 6H0L6 0Z" fill="#393939" />
					</svg>
				</div>
			)}
			<div
				className={`bg-[#393939] py-2 px-3 typo-u4 space-y-2 rounded-sm shadow`}
				// style={anchorRight ? { position: "relative", left: "-80%" } : { left: "unset" }}
				style={
					anchorRight
						? { position: 'relative', left: '-80%' }
						: { position: 'relative', left: 'unset' }
				}
			>
				<div>{district?.name}</div>
				<div className="space-y-1">
					{displayCandidate.map(({ shortname, number, color, percentage }, index) => (
						<div
							className={`flex flex-row items-center space-x-2 ${index === 0 ? 'font-bold' : ''}`}
						>
							<div className="w-2 h-2" style={{ backgroundColor: color }} />
							<div className="flex-1">
								{number ? `[${number}] ` : ''}
								{shortname}
							</div>
							<div>{percentage}%</div>
						</div>
					))}
				</div>
			</div>
			{!pointUp && (
				<div>
					<svg
						width="12"
						height="6"
						viewBox="0 0 12 6"
						fill="none"
						className="ml-2"
						transform="scale(1,-1)"
					>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6 0L12 6H0L6 0Z" fill="#393939" />
					</svg>
				</div>
			)}
		</div>
	);
};

export default DistrictTooltip;
