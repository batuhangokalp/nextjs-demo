"use client";
import Banner from '@/components/GlobalComponents/Banner';
import PhotoGallery from '@/components/Multimedia/PhotoGallery';
import VideoGallery from '@/components/Multimedia/VideoGallery';
import { useParams } from 'next/navigation';

const photos = [
  '/pictures/img5.jpg',
  '/pictures/img6.png',
  '/pictures/img7.jpg',
  '/pictures/img8.jpg',
  '/pictures/img1.jpg',
  '/pictures/img2.jpg',
  '/pictures/img3.jpg',
  '/pictures/img4.jpg',
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
          <Banner src="/pictures/gallery4.png" heading="VİDEOLAR" />
          <VideoGallery videos={videos} />
          </>
      );
      break;
    case 'fotograf':
      content = (
        <>
          <Banner src="/pictures/gallery4.png" heading="FOTOĞRAFLAR" />
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
