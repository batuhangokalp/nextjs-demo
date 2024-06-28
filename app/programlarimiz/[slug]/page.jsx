"use client";
import { useParams } from 'next/navigation';

export default function ProgramsPage() {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <h1>Blog Post: {slug}</h1>

      <h1>Blog Post: {slug}</h1>

      <h1>Blog Post: {slug}</h1>

      <h1>Blog Post: {slug}</h1>

      <p>Bu, dinamik bir blog gönderisidir.</p>
    </div>
  );
}
