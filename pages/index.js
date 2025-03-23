import Layout from "@/components/layout/Layout"
import Bgmap from "@/components/sections/homepage1/Bgmap"
import Cta1 from "@/components/sections/homepage1/Cta1"
import Faqs1 from "@/components/sections/homepage1/Faqs1"
import Hero1 from "@/components/sections/homepage1/Hero1"
import Howitwork1 from "@/components/sections/homepage1/Howitwork1"
import Services1 from "@/components/sections/homepage1/Services1"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headTitle="BinBear - Junk Removal & Waste Management">
                <Hero1 />
                <Services1 />
                <Howitwork1 />
                <Faqs1 />
                <Cta1 />
                <Bgmap />
            </Layout>
        </>
    )
}