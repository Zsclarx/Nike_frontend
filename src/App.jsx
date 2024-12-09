import "./index.css"
import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import SpecialOffer from "./sections/SpecialOffer";
import PopularProducts from "./sections/PopularProducts";
import Footer from "./sections/Footer";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";
import Services from "./sections/Services";
import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 padding-b">
      <Hero/>
    </section>

    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black  padding-x padding-t">
      <Footer/>
    </section>

  </main>
)

export default App;