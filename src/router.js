import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import TruliaCards from './components/TruliaCards.vue';
import OpenListingCards from './components/OpenListingCards.vue';
import OutDoorProject from './components/OutDoorProject.vue';
import WebSiteCssGrid from './components/WebSiteCssGrid.vue';
import CssGridBasis from './components/CssGridBasis.vue';
import GrammarlySection from './components/GrammarlySection.vue';
import FlexBoxMaster from './components/FlexBoxMaster.vue';
import OpenDoorAdviser from './components/OpendoorAdviser.vue';
import AirbnbCards from './components/AirbnbCards.vue';
import ContactOpenDoor from './components/ContactOpenDoor.vue';
import AirbnbHeadSection from './components/AirbnbHeadSection.vue';
import OpenDoorPictureSection from './components/OpenDoorPictureSection.vue';
import ScrollHandlerSections from './components/ScrollHandlerSections.vue';
import SrpOpenDoor from './components/SrpOpenDoor.vue';
import TabsStripe from './components/TabsStripe.vue';
import GridGalleryColumns from './components/GridGalleryColumns.vue';
import AirbnbGrid from './components/AirbnbGrid.vue';
import CompasSection from './components/CompasSection.vue';
import QuintoAndarClientSection from './components/QuintoAndarClientSection.vue';
import KarimSection from './components/KarimSection.vue';
import StripeCarousel from './components/StripeCarousel.vue';
import CardsZillow from './components/CardsZillow.vue';
import PdpQuintoAndar from './components/PdpQuintoAndar.vue';
import ListPaymentHistory from './components/ListPaymentHistory.vue';
import CasperGridSection from './components/CasperGridSection.vue';
import CardSignUp from './components/CardSignUp.vue';
import DonutsCalculator from './components/DonutsCalculator.vue';
import OpenDoorComparativeBox from './components/OpenDoorComparativeBox.vue';
import DashboardGrid from './components/DashboardGrid.vue';
import StripeGrid from './components/StripeGrid.vue';
import StripeCustomerCard from './components/StripeCustomerCard.vue';
import AdminLayout from './components/AdminLayout.vue';
import CardRefUi from './components/CardRefUi.vue';
import AirbnbGalleryGrid from './components/AirbnbGalleryGrid.vue';
import AdminGridTransactions from './components/AdminGridTransactions.vue';
import GuglieriSticky from './components/GuglieriSticky.vue';
import MailInbox from './components/MailInbox.vue';
import AdminPanels from './components/AdminPanels.vue';
import SealcoGrid from './components/SealcoGrid.vue';
import AccentBoxHover from './components/AccentBoxHover.vue';
import AccentProductSection from './components/AccentProductSection.vue';
import Navbar3Ways from './components/Navbar3Ways.vue';
import TubikCompany from './components/TubikCompany.vue';
import LandingUserInterface from './components/LandingUserInterface.vue';
import CardProfile from './components/CardProfile.vue';
import CookiesComponents from './components/CookiesComponents.vue';
import TopProductSales from './components/TopProductSales.vue';
import MenuGmail from './components/MenuGmail.vue';
import MenuDribbble from './components/MenuDribbble.vue';
import GridCollections from './components/GridCollections.vue';
import GroupAvatar from './components/GroupAvatar.vue';
import GridAgency from './components/GridAgency.vue';
import LandingHero from './components/LandingHero.vue';
import LandingCoffee from './components/LandingCoffee.vue';
import LandingProcreate from './components/LandingProcreate.vue';
import SvgGrid from './components/SvgGrid.vue';
import EcommerceCard from './components/EcommerceCard.vue';
import PayAmountComponent from './components/PayAmountComponent.vue';
import DebidCard from './components/DebidCard.vue';
import CardMinimalSubscribe from './components/CardMinimalSubscribe.vue';
import CourseFlexbox from './components/CourseFlexbox.vue';
import GoogleClone from './components/GoogleClone.vue';
import Warren from './components/Warren.vue';
import CardGoogle from './components/CardGoogle.vue';
import TwitterFollowers from './components/TwitterFollowers.vue';
import CardsFlatFile from './components/CardsFlatFile.vue';
import ZenefitsCustomerSection from './components/ZenefitsCustomerSection.vue';
import SpeedySection from './components/SpeedySection.vue';
import SpeedyDarkSection from './components/SpeedyDarkSection.vue';
import VoviStudioSection from './components/VoviStudioSection.vue';
import BrandsLabSection from './components/BrandsLabSection.vue';
import VoviStudioOverview from './components/VoviStudioOverview.vue';
import NewQuintoAndar from './components/NewQuintoAndar.vue';
import JacquardMarkup from './components/JacquardMarkup.vue';
import FlatFileDemo from './components/FlatFileDemo.vue';
import LuloSection from './components/LuloSection.vue';
import JacquardLanding from './components/JacquardLanding.vue';
import EnginStill from './components/EnginStill.vue';
import ExecutiveAgency from './components/ExecutiveAgency.vue';
import TheFuturCardPrice from './components/TheFuturCardPrice.vue';
import PublishStoriesSignUp from './components/PublishStoriesSignUp.vue';
import AffirmSection from './components/AffirmSection.vue';
import ButtonsEffects from './components/ButtonsEffects.vue';
import LayoutAirbnb from './components/LayoutAirbnb.vue';
import CardIkea from './components/CardIkea.vue';
import CapitalLayout from './components/CapitalLayout.vue';
import GoTrade from './components/GoTrade.vue';
import AwwwardsMasters from './components/AwwwardsMasters.vue';
import AwwwardsDirectory from './components/AwwwardsDirectory.vue';

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld,
    },
    {
      path: '/trulia-cards',
      name: 'TruliaCards',
      component: TruliaCards,
    },
    {
      path: '/css-grid-basis',
      name: 'CssGridBasis',
      component: CssGridBasis,
    },
    {
      path: '/openlisting-cards',
      name: 'OpenListingCards',
      component: OpenListingCards,
    },
    {
      path: '/outdoor',
      name: 'OutDoorProject',
      component: OutDoorProject,
    },
    {
      path: '/website-css-grid',
      name: 'WebSiteCssGrid',
      component: WebSiteCssGrid,
    },
    {
      path: '/grammarly-section',
      name: 'GrammarlySection',
      component: GrammarlySection,
    },
    {
      path: '/flexbox-master',
      name: 'FlexBoxMaster',
      component: FlexBoxMaster,
    },
    {
      path: '/opendoor-adviser',
      name: 'OpenDoorAdviser',
      component: OpenDoorAdviser,
    },
    {
      path: '/airbnb-cards',
      name: 'AirbnbCards',
      component: AirbnbCards,
    },
    {
      path: '/contact-opendoor',
      name: 'ContactOpenDoor',
      component: ContactOpenDoor,
    },
    {
      path: '/airbnb-header-section',
      name: 'AirbnbHeadSection',
      component: AirbnbHeadSection,
    },
    {
      path: '/opendoor-pic-section',
      name: 'OpenDoorPictureSection',
      component: OpenDoorPictureSection,
    },
    {
      path: '/scroll-handler-section',
      name: 'ScrollHandlerSections',
      component: ScrollHandlerSections,
    },
    {
      path: '/srp-open-door',
      name: 'SrpOpenDoor',
      component: SrpOpenDoor,
    },
    {
      path: '/tabs-stripe',
      name: 'TabsStripe',
      component: TabsStripe,
    },
    {
      path: '/grid-gallery-columns',
      name: 'GridGalleryColumns',
      component: GridGalleryColumns,
    },
    {
      path: '/airbnb-grid',
      name: 'AirbnbGrid',
      component: AirbnbGrid,
    },
    {
      path: '/compass-section',
      name: 'CompasSection',
      component: CompasSection,
    },
    {
      path: '/quindoandar-client-section',
      name: 'QuintoAndarClientSection',
      component: QuintoAndarClientSection,
    },
    {
      path: '/karim-section',
      name: 'KarimSection',
      component: KarimSection,
    },
    {
      path: '/stripe-carousel',
      name: 'StripeCarousel',
      component: StripeCarousel,
    },
    {
      path: '/cards-zillow',
      name: 'CardsZillow',
      component: CardsZillow,
    },
    {
      path: '/pdp-quintoandar',
      name: 'PdpQuintoAndar',
      component: PdpQuintoAndar,
    },
    {
      path: '/list-payment-history',
      name: 'ListPaymentHistory',
      component: ListPaymentHistory,
    },
    {
      path: '/casper-grid-section',
      name: 'CasperGridSection',
      component: CasperGridSection,
    },
    {
      path: '/card-signup',
      name: 'CardSignUp',
      component: CardSignUp,
    },
    {
      path: '/donuts-calculator',
      name: 'DonutsCalculator',
      component: DonutsCalculator,
    },
    {
      path: '/opendoor-comparative-box',
      name: 'OpenDoorComparativeBox',
      component: OpenDoorComparativeBox,
    },
    {
      path: '/dashboard-grid',
      name: 'DashboardGrid',
      component: DashboardGrid,
    },
    {
      path: '/stripe-grid',
      name: 'StripeGrid',
      component: StripeGrid,
    },
    {
      path: '/stripe-customer-card',
      name: 'StripeCustomerCard',
      component: StripeCustomerCard,
    },
    {
      path: '/admin-layout',
      name: 'AdminLayout',
      component: AdminLayout,
    },
    {
      path: '/card-ref-ui',
      name: 'CardRefUi',
      component: CardRefUi,
    },
    {
      path: '/airbnb-gallery-grid',
      name: 'AirbnbGalleryGrid',
      component: AirbnbGalleryGrid,
    },
    {
      path: '/admin-grid-transactions',
      name: 'AdminGridTransactions',
      component: AdminGridTransactions,
    },
    {
      path: '/guglieri-sticky',
      name: 'GuglieriSticky',
      component: GuglieriSticky,
    },
    {
      path: '/mail-inbox',
      name: 'MailInbox',
      component: MailInbox,
    },
    {
      path: '/admin-panels',
      name: 'AdminPanels',
      component: AdminPanels,
    },
    {
      path: '/sealco-grid',
      name: 'SealcoGrid',
      component: SealcoGrid,
    },
    {
      path: '/accent-box-hover',
      name: 'AccentBoxHover',
      component: AccentBoxHover,
    },
    {
      path: '/accent-products-section',
      name: 'AccentProductSection',
      component: AccentProductSection,
    },
    {
      path: '/navbar-3-ways',
      name: 'Navbar3Ways',
      component: Navbar3Ways,
    },
    {
      path: '/tubik-company',
      name: 'TubikCompany',
      component: TubikCompany,
    },
    {
      path: '/landing-user-interface',
      name: 'LandingUserInterface',
      component: LandingUserInterface,
    },
    {
      path: '/card-profile',
      name: 'CardProfile',
      component: CardProfile,
    },
    {
      path: '/cookies-components',
      name: 'CookiesComponents',
      component: CookiesComponents,
    },
    {
      path: '/top-product-sales',
      name: 'TopProductSales',
      component: TopProductSales,
    },
    {
      path: '/menu-gmail',
      name: 'MenuGmail',
      component: MenuGmail,
    },
    {
      path: '/menu-dribbble',
      name: 'MenuDribbble',
      component: MenuDribbble,
    },
    {
      path: '/grid-collections',
      name: 'GridCollections',
      component: GridCollections,
    },
    {
      path: '/group-avatar',
      name: 'GroupAvatar',
      component: GroupAvatar,
    },
    {
      path: '/grid-agency',
      name: 'GridAgency',
      component: GridAgency,
    },
    {
      path: '/landing-hero',
      name: 'LandingHero',
      component: LandingHero,
    },
    {
      path: '/landing-coffee',
      name: 'LandingCoffee',
      component: LandingCoffee,
    },
    {
      path: '/landing-procreate',
      name: 'LandingProcreate',
      component: LandingProcreate,
    },
    {
      path: '/svg-grid',
      name: 'SvgGrid',
      component: SvgGrid,
    },
    {
      path: '/ecommerce-card',
      name: 'EcommerceCard',
      component: EcommerceCard,
    },
    {
      path: '/pay-amount-component',
      name: 'PayAmountComponent',
      component: PayAmountComponent,
    },
    {
      path: '/debid-card',
      name: 'DebidCard',
      component: DebidCard,
    },
    {
      path: '/card-minimal-subscribe',
      name: 'CardMinimalSubscribe',
      component: CardMinimalSubscribe,
    },
    {
      path: '/course-flexbox',
      name: 'CourseFlexbox',
      component: CourseFlexbox,
    },
    {
      path: '/google-clone',
      name: 'GoogleClone',
      component: GoogleClone,
    },
    {
      path: '/warren',
      name: 'Warren',
      component: Warren,
    },
    {
      path: '/card-google',
      name: 'CardGoogle',
      component: CardGoogle,
    },
    {
      path: '/twitter-followers',
      name: 'TwitterFollowers',
      component: TwitterFollowers,
    },
    {
      path: '/cards-flat-file',
      name: 'CardsFlatFile',
      component: CardsFlatFile,
    },
    {
      path: '/zenefits-customers-section',
      name: 'ZenefitsCustomerSection',
      component: ZenefitsCustomerSection,
    },
    {
      path: '/speedy-section',
      name: 'SpeedySection',
      component: SpeedySection,
    },
    {
      path: '/speedy-dark-section',
      name: 'SpeedyDarkSection',
      component: SpeedyDarkSection,
    },
    {
      path: '/vovi-studio-section',
      name: 'VoviStudioSection',
      component: VoviStudioSection,
    },
    {
      path: '/brands-lab-section',
      name: 'BrandsLabSection',
      component: BrandsLabSection,
    },
    {
      path: '/vovi-studio-overview',
      name: 'VoviStudioOverview',
      component: VoviStudioOverview,
    },
    {
      path: '/new-quinto-andar',
      name: 'NewQuintoAndar',
      component: NewQuintoAndar,
    },
    {
      path: '/jacquard-markup',
      name: 'JacquardMarkup',
      component: JacquardMarkup,
    },
    {
      path: '/flat-file-demo',
      name: 'FlatFileDemo',
      component: FlatFileDemo,
    },
    {
      path: '/lulo-section',
      name: 'LuloSection',
      component: LuloSection,
    },
    {
      path: '/jacquard-landing',
      name: 'JacquardLanding',
      component: JacquardLanding,
    },
    {
      path: '/cookies-enginstill',
      name: 'EnginStill',
      component: EnginStill,
    },
    {
      path: '/executive-agency',
      name: 'ExecutiveAgency',
      component: ExecutiveAgency,
    },
    {
      path: '/thefutur-card-price',
      name: 'TheFuturCardPrice',
      component: TheFuturCardPrice,
    },
    {
      path: '/publish-stories-signup',
      name: 'PublishStoriesSignUp',
      component: PublishStoriesSignUp,
    },
    {
      path: '/affirm-section',
      name: 'AffirmSection',
      component: AffirmSection,
    },
    {
      path: '/buttons-effects',
      name: 'ButtonsEffects',
      component: ButtonsEffects,
    },
    {
      path: '/layout-airbnb',
      name: 'LayoutAirbnb',
      component: LayoutAirbnb,
    },
    {
      path: '/card-ikea',
      name: 'CardIkea',
      component: CardIkea,
    },
    {
      path: '/capital-layout',
      name: 'CapitalLayout',
      component: CapitalLayout,
    },
    {
      path: '/go-trade',
      name: 'GoTrade',
      component: GoTrade,
    },
    {
      path: '/awwwards-masters',
      name: 'AwwwardsMasters',
      component: AwwwardsMasters,
    },
    {
      path: '/awwwards-directory',
      name: 'AwwwardsDirectory',
      component: AwwwardsDirectory,
    },
  ],
});
