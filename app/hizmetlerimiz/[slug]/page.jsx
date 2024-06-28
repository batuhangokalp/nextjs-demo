"use client";
import Banner from '@/components/GlobalComponents/Banner';
import { useParams } from 'next/navigation';

export default function ServicesPage() {
  const params = useParams();
  const { slug } = params;

  return (
    <>
      <Banner src="/pictures/services.jpg" heading="HİZMETLERİMİZ" />
    </>
  );
}
