import React from 'react'
import ProgramsFilterList from '../ProgramsFilterList';

const ProgramFilterCardType = (props) => {
  return (
    <div className="w-full bg-slate-200 rounded-2xl p-4 flex flex-col gap-5">
      <h1>{props.title}</h1>
      <ul className="flex flex-col gap-2 h-24 overflow-y-visible overflow-x-hidden overflow-scroll scroll-m-4">
        <ProgramsFilterList title="Cohort 1" />
        <ProgramsFilterList title="Cohort 2" />
        <ProgramsFilterList title="Cohort 3" />
        <ProgramsFilterList title="Cohort 4" />
        <ProgramsFilterList title="Cohort 5" />
      </ul>
    </div>
  );
}

export default ProgramFilterCardType