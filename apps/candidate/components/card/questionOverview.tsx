import Image from 'next/image';
import playButtonBw from '../../static/icon/play-wb.svg';
import playButtonGray from '../../static/icon/play-gray.svg';
import { AppContext } from '../../store';
import { useContext } from 'react';

export function QuestionOverview() {
  const { store } = useContext(AppContext);
  const questionCategory = store.questionCategory;

  const questionRow = (question: string) => {
    return (
      <div className="flex">
        <div>
          <Image
            src={playButtonGray}
            alt="play-bt-gray"
            width="25px"
            height="25px"
          />
        </div>
        <div className="flex-1 ml-[10px]">{question}</div>
      </div>
    );
  };
  const questionColumn = (colName: string, questionList: string[]) => {
    return (
      <div className="flex flex-col text-left">
        <p className="typo-h9">{colName}:</p>
        <div className="flex flex-col space-y-[25px] mt-5">
          {questionList.map((q) => questionRow(q))}
        </div>
      </div>
    );
  };

  return (
    <div className="text-white mt-20 relative">
      <div className="absolute top-[-30px] w-full text-center">
        <Image src={playButtonBw} alt="play-bt-bw" width={61} height={61} />
      </div>
      <div className="text-center p-10 border border-[#9d9d9d] rounded-[10px] max-w-[1145px] m-auto">
        <p className="typo-h5 mt-5 mb-10">
          ฟัง 5 ผู้สมัครในกระแสตอบ 21 คำถามเดียวกัน
        </p>
        <div className="border-y p-10 border-[#9d9d9d80] flex items-center m-auto justify-center">
          <Image
            src={playButtonGray}
            alt="play-bt-gray"
            width={25}
            height={25}
          />
          <p className="typo-b6 ml-[10px]">
            <span className="text-bold">Exclusive Speech :</span>
            ทำไมต้องเลือกคุณเป็นผู้ว่าฯ กทม.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] my-10">
          {questionColumn('Policy', questionCategory.policy)}
          {questionColumn('Opinion', questionCategory.opinion)}
          {questionColumn('Lifestyle', questionCategory.lifestyle)}
        </div>
        <div className="border-t border-[#9d9d9d80] pt-10 pt-[30px]">
          + อีก 5 คำถามเคลียร์ใจเฉพาะตัวผู้สมัคร
        </div>
      </div>
    </div>
  );
}
