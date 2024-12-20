import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import Accordion from './Accordion';

type Props = {
  question: string;
  answer: string;
  idx: number;
};

interface LayoutProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  isSomeActive: boolean; // 수정된 타입
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  data: Props[];
}

const Layout = ({ handleClick, isSomeActive, data, turn, setTurn }: LayoutProps) => {
  return (
    <div className="items-center flex flex-col w-full my-5 px-4">
      {/* Title */}
      <span className="text-3xl px-6 py-3 text-black">
        Frequently Asked Questions
      </span>

      {/* Open All/Close All Button */}
      <div className="flex items-center justify-end w-full mb-6">
        <button
          className="flex items-center space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50"
          onClick={handleClick}
        >
          <span className="text-sky-500 min-w-fit text-ellipsis">
            {!isSomeActive ? 'Open All' : 'Close All'}
          </span>
          <div
            className={
              'relative transition-all ease-in-out duration-200 ' +
              (isSomeActive ? 'rotate-180' : 'rotate-0')
            }
          >
            <Image src="/images/contact/down.svg" alt="down" width={40} height={40} />
          </div>
        </button>
      </div>

      {/* Accordion Items */}
      {data.map((el, i) => (
        <div className="w-full" key={`questions${i}`}>
          <Accordion
            question={el.question}
            answer={el.answer}
            turn={turn}
            setTurn={setTurn}
            idx={el.idx}
          />
        </div>
      ))}
    </div>
  );
};

export default Layout;
