import styles from '../../styles/AboutComponent.module.css'
import ProfileCard from '../GlobalComponents/ProfileCard'
const ProfessionalCrew = ({ slug }) => {
    return (
        <div className={styles.professionalCrew}>
            <ProfileCard
                src={"/pictures/defacto.png"}
                name="Batuhan Gökalp"
                title="Matematik Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/lcw.png"}
                name="Ayşe Yılmaz"
                title="Türkçe Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/koton.png"}
                name="Burak Yakın"
                title="Tarih Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/jackjones.png"}
                name="Aslı Yalçın"
                title="Coğrafya Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/suvari.png"}
                name="Batuhan Gökalp"
                title="Matematik Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/pastel.png"}
                name="Ayşe Yılmaz"
                title="Türkçe Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/ebebek.png"}
                name="Ayşe Yılmaz"
                title="Türkçe Öğretmeni"
                slug={slug}
            />
            <ProfileCard
                src={"/pictures/panco.png"}
                name="Ayşe Yılmaz"
                title="Türkçe Öğretmeni"
                slug={slug}
            />
        </div>
    )
}

export default ProfessionalCrew