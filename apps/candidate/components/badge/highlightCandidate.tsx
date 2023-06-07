import { IGovernor } from '../../types/business';
import candidataImg from '../../static/images/candidate.png';
import playGrayWhite from '../../static/icons/play-gw.svg';
import { useRouter } from 'next/router';
import { colorDict, numberListType } from '../../utils/dict';
import Link from 'next/link';

interface PropType {
  candidate: IGovernor;
  isComingSoon?: boolean;
}

export function HighlightCandidateBadge({ candidate, isComingSoon }: PropType) {
  const router = useRouter();

  const getHref = () => {
    return `/${candidate.id}#hc-${candidate.id}`;
  };

  const showVideo = !isComingSoon && candidate.answers.length > 0;

  return (
    <Link href={getHref()}>
      <a
        id={`hc-${candidate.number}`}
        className={`max-w-[500px] w-[85vw] md:w-[30vw] m-auto hover:cursor-pointer`}
      >
        {/* eslint-disable */}
        <div className="w-[85vw] h-[85vw] md:w-[30vw] md:h-[30vw] max-w-[500px] max-h-[500px] relative">
          <img
            src={candidate.profile_pic || candidataImg.src}
            alt="candidate"
            className={`w-[85vw] h-[85vw] md:w-[30vw] md:h-[30vw] max-w-[500px] max-h-[500px] hover:border border-white`}
          />
          {showVideo && (
            <img
              src={playGrayWhite.src}
              alt="play"
              className="w-[60px] h-[60px] absolute bottom-[20px] right-[20px] pointer-events-none"
            />
          )}
        </div>
        <div className="flex text-white mt-[5px] md:mt-[12px]">
          <div
            className="typo-h2 mr-[10px]"
            style={{
              color: colorDict[(candidate.number as numberListType) || 1],
            }}
          >
            {candidate.number}
          </div>
          <div className="flex flex-col justify-center">
            <p className="typo-h8">{candidate.name}</p>
            <p className="typo-b5 text-[#ffffff80]">{candidate.party}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
