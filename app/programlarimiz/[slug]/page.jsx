"use client";
import Banner from '@/components/GlobalComponents/Banner';
import ProgramContent from '@/components/Programs/ProgramsContent';
import { useParams } from 'next/navigation';
import programData from '../../../components/datas/Programs.json';

export default function ProgramPage() {
  const params = useParams();
  const { slug } = params;
  let content;

  switch (slug) {
    case programData.program1.case:
      content = (
        <>
          <Banner src={programData.program1.image} heading={programData.program1.title} />
          <ProgramContent
            heading={programData.program1.heading}
            src={programData.program1.contentImg}
            span1={programData.program1.span1}
            span2={programData.program1.span2}
            span3={programData.program1.span3}
            span4={programData.program1.span4}
          />
        </>
      );
      break;
    case programData.program2.case:
      content = (
        <>
          <Banner src={programData.program2.image} heading={programData.program2.title} />
          <ProgramContent
            heading={programData.program2.heading}
            src={programData.program2.contentImg}
            span1={programData.program2.span1}
            span2={programData.program2.span2}
            span3={programData.program2.span3}
            span4={programData.program2.span4}
          />
        </>
      );
      break;
    case programData.program3.case:
      content = (
        <>
          <Banner src={programData.program3.image} heading={programData.program3.title} />
          <ProgramContent
            heading={programData.program3.heading}
            src={programData.program3.contentImg}
            span1={programData.program3.span1}
            span2={programData.program3.span2}
            span3={programData.program3.span3}
            span4={programData.program3.span4}
          />
        </>
      );
      break;

  }

  return (
    <>
      {content}
    </>
  );
}
