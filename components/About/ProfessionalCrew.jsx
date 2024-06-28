import styles from '../../styles/AboutComponent.module.css'
import ProfileCard from '../GlobalComponents/ProfileCard'
const ProfessionalCrew = ({ slug }) => {
    return (
        <div className={styles.professionalCrew}>
            <ProfileCard
                src={"/pictures/teacher1.jpg"}
                name="Batuhan Gökalp"
                title="Matematik Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/teacher2.jpg"}
                name="Ayşe Yılmaz"
                title="Türkçe Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/teacher3.jpg"}
                name="Burak Yakın"
                title="Tarih Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/teacher4.jpg"}
                name="Aslı Yalçın"
                title="Coğrafya Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/teacher1.jpg"}
                name="Batuhan Gökalp"
                title="Matematik Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/teacher2.jpg"}
                name="Ayşe Yılmaz"
                title="Türkçe Öğretmeni"
                slug={slug}
            />
        </div>
    )
}

export default ProfessionalCrew