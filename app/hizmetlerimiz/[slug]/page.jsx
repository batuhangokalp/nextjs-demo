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
      case servicesData.hizmet4.case:
        content = (
        <>
          <Banner src={servicesData.hizmet4.image} heading={servicesData.hizmet4.title} />
          <ServicesContent
            heading={servicesData.hizmet4.heading}
            src={servicesData.hizmet4.contentImg}
            span1={servicesData.hizmet4.span1}
            span2={servicesData.hizmet4.span2}
            span3={servicesData.hizmet4.span3}
            span4={servicesData.hizmet4.span4}
          />
        </>
      );
      break;
      case servicesData.hizmet5.case:
        content = (
        <>
          <Banner src={servicesData.hizmet5.image} heading={servicesData.hizmet5.title} />
          <ServicesContent
            heading={servicesData.hizmet5.heading}
            src={servicesData.hizmet5.contentImg}
            span1={servicesData.hizmet5.span1}
            span2={servicesData.hizmet5.span2}
            span3={servicesData.hizmet5.span3}
            span4={servicesData.hizmet5.span4}
          />
        </>
      );
      break;
      case servicesData.hizmet6.case:
        content = (
        <>
          <Banner src={servicesData.hizmet6.image} heading={servicesData.hizmet6.title} />
          <ServicesContent
            heading={servicesData.hizmet6.heading}
            src={servicesData.hizmet6.contentImg}
            span1={servicesData.hizmet6.span1}
            span2={servicesData.hizmet6.span2}
            span3={servicesData.hizmet6.span3}
            span4={servicesData.hizmet6.span4}
          />
        </>
      );
      break;
      case servicesData.hizmet7.case:
        content = (
        <>
          <Banner src={servicesData.hizmet7.image} heading={servicesData.hizmet7.title} />
          <ServicesContent
            heading={servicesData.hizmet7.heading}
            src={servicesData.hizmet7.contentImg}
            span1={servicesData.hizmet7.span1}
            span2={servicesData.hizmet7.span2}
            span3={servicesData.hizmet7.span3}
            span4={servicesData.hizmet7.span4}
          />
        </>
      );
      break;
      case servicesData.hizmet8.case:
        content = (
        <>
          <Banner src={servicesData.hizmet8.image} heading={servicesData.hizmet8.title} />
          <ServicesContent
            heading={servicesData.hizmet8.heading}
            src={servicesData.hizmet8.contentImg}
            span1={servicesData.hizmet8.span1}
            span2={servicesData.hizmet8.span2}
            span3={servicesData.hizmet8.span3}
            span4={servicesData.hizmet8.span4}
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
