import AboutUs from '@/components/HomePage/AboutUs'
import BeHelper from '@/components/HomePage/BeHelper'
import MainTop from '@/components/HomePage/MainTop'
import Photos from '@/components/HomePage/Photos'
import ProfessionalCrew from '@/components/HomePage/ProfessionalCrew'
import UsInNumbers from '@/components/HomePage/UsInNumbers'

const Home = () => {
  return (
    <>
      <MainTop />
      <AboutUs />
      <BeHelper />
      <ProfessionalCrew />
      <UsInNumbers />
      <Photos />
    </>
  )
}

export default Home