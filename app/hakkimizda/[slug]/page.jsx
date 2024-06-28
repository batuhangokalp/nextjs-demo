"use client";
import ProfessionalCrew from '@/components/About/ProfessionalCrew';
import VisionAndMission from '@/components/About/VisionAndMission';
import WhoWeAre from '@/components/About/WhoWeAre';
import Banner from '@/components/GlobalComponents/Banner';
import { useParams } from 'next/navigation';

export default function AboutPage() {
  const params = useParams();
  const { slug } = params;

  let content;

  switch (slug) {
    case 'biz-kimiz':
      content = (
        <>
          <Banner src="/pictures/hakkimizda.jpg" heading="HAKKIMIZDA" />
          <WhoWeAre />
        </>
      );
      break;
    case 'vizyon-misyon':
      content = (
        <>
          <Banner src="/pictures/vision.jpg" heading="VİZYON VE MİSYONUMUZ" />
          <VisionAndMission />
        </>
      );
      break;
    case 'ekibimiz':
      content = (
        <>
          <Banner src="/pictures/crew2.jpg" heading="UZMAN EKİBİMİZ" />
          <ProfessionalCrew slug={slug} />
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
