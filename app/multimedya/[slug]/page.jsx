"use client";
import Banner from '@/components/GlobalComponents/Banner';
import PhotoGallery from '@/components/Multimedia/PhotoGallery';
import VideoGallery from '@/components/Multimedia/VideoGallery';
import { useParams } from 'next/navigation';

const photos = [
  '/pictures/matbaa1.jpg',
  '/pictures/matbaa2.jpg',
  '/pictures/matbaa3.jpg',
  '/pictures/matbaa4.jpg',
  '/pictures/matbaa5.jpg',
  '/pictures/matbaa6.jpg',
  '/pictures/matbaa1.jpg',
  '/pictures/matbaa2.jpg',
];
const videos = [
  { id: 'lnHtdgvR3pQ' },
  { id: 'bA5kG5NFph0' },
  { id: 'Eo_nV-Yrg0s' },
  { id: 'en9GeqkO89E' },
  { id: 'c6-ChtDWT00' },
];
export default function ProgramPage() {
  const params = useParams();
  const { slug } = params;

  let content;

  switch (slug) {
    case 'video':
      content = (
        <>
          <Banner src="/pictures/matbaa5.jpg" heading="VİDEOLAR" />
          <VideoGallery videos={videos} />
          </>
      );
      break;
    case 'fotograf':
      content = (
        <>
          <Banner src="/pictures/matbaa5.jpg" heading="FOTOĞRAFLAR" />
          <PhotoGallery photos={photos} />
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
