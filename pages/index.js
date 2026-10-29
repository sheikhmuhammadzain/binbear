import Layout from "@/components/layout/Layout"
import dynamic from "next/dynamic"
import Hero1 from "@/components/sections/homepage1/Hero1"

const Howitwork1 = dynamic(
  () => import("@/components/sections/homepage1/Howitwork1"),
)
const Cta1 = dynamic(() => import("@/components/sections/homepage1/Cta1"))
const Bgmap = dynamic(() => import("@/components/sections/homepage1/Bgmap"))
const StickyBookNow = dynamic(
  () => import("@/components/elements/StickyBookNow"),
  {
    ssr: false,
  },
)

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headTitle="BinBear - Junk Removal & Waste Management"
      >
        <Hero1 />
        <Howitwork1 />
        <Cta1 />
        <Bgmap />
        <StickyBookNow />
      </Layout>
    </>
  )
}
