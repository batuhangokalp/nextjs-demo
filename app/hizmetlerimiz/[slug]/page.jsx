"use client";
import Banner from '@/components/GlobalComponents/Banner';
import ServicesContent from '@/components/ServicesComponent/ServicesContent';
import { useParams } from 'next/navigation';
import servicesData from '../../../components/datas/Services.json';

export default function ProgramPage() {
  const params = useParams();
  const { slug } = params;

  let content;

  switch (slug) {
    case servicesData.hizmet1.case:
      content = (
        <>
          <Banner src={servicesData.hizmet1.image} heading={servicesData.hizmet1.title} />
          <ServicesContent
            heading={servicesData.hizmet1.heading}
            src={servicesData.hizmet1.contentImg}
            span1={servicesData.hizmet1.span1}
            span2={servicesData.hizmet1.span2}
            span3={servicesData.hizmet1.span3}
            span4={servicesData.hizmet1.span4}
          />
        </>
      );
      break;
      case servicesData.hizmet2.case:
        content = (
        <>
          <Banner src={servicesData.hizmet2.image} heading={servicesData.hizmet2.title} />
          <ServicesContent
            heading={servicesData.hizmet2.heading}
            src={servicesData.hizmet2.contentImg}
            span1={servicesData.hizmet2.span1}
            span2={servicesData.hizmet2.span2}
            span3={servicesData.hizmet2.span3}
            span4={servicesData.hizmet2.span4}
          />
        </>
      );
      break;
      case servicesData.hizmet3.case:
        content = (
        <>
          <Banner src={servicesData.hizmet3.image} heading={servicesData.hizmet3.title} />
          <ServicesContent
            heading={servicesData.hizmet3.heading}
            src={servicesData.hizmet3.contentImg}
            span1={servicesData.hizmet3.span1}
            span2={servicesData.hizmet3.span2}
            span3={servicesData.hizmet3.span3}
            span4={servicesData.hizmet3.span4}
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
