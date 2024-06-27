import {Video} from "../../components/Video/Video";
// import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { SupportSustainable } from "../../section/SupportSustainable/SupportSustainable";
import { ProgramDetails } from "../../section/ProgramDetails/ProgramDetails";
import { HomeSpeakersSection } from "../../section/HomeSpeakersSection/HomeSpeakersSection";
import { BannerSection } from "../../section/BannerSection/BannerSection";
import { PrizeGivingSection } from "../../section/PrizeGivingSection/PrizeGivingSection";
import { NewsSection } from "../../section/NewsSection/NewsSection";
import { Newsletter } from "../../section/Newsletter/Newsletter";
import { Footer } from "../../layout/Footer/Footer";
import { PartnerSection } from "../../section/PartnersSection/PartnerSection";
import "./HomePage.scss"




export default function HomePage() {
    return(
        <div className="home-page-container">
             <Video />
            {/* <ImageSlider /> */}
            <SupportSustainable />
            <ProgramDetails />
            <HomeSpeakersSection />
            <BannerSection />
            <PrizeGivingSection />
            <PartnerSection />
            <NewsSection />
            <Newsletter />
            <Footer />
        </div>
    )
}