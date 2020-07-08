import PageLayout from "components/layouts/page"
import CroppedIllustrationHero from "components/layouts/cropped-illustration-hero"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"
import TokenholdersDashboardSvg from "components/svgs/tokenholders-dashboard"
import GetTokenSection from "components/sections/tokenholders/get-token"
import TokenholderStatsSection from "components/sections/tokenholders/tokenholder-stats"

const TokenholdersPage = () => (
  <PageLayout footerProps={{ prefooter: "faqs" }}>
    <CroppedIllustrationHero
      title="Tokenholders"
      subtitle="Everyday thousands of tokenholders participate in Livepeer, the world’s first open source, peer-to-peer video transcoding platform."
      illustration={
        <IllustratedBackgroundBox pushContentSx={{ overflow: "hidden" }}>
          <TokenholdersDashboardSvg />
        </IllustratedBackgroundBox>
      }
      pushSx={{ mb: "-148px", maxWidth: "900px" }}
    />
    <GetTokenSection />
    <TokenholderStatsSection />
  </PageLayout>
)

export default TokenholdersPage