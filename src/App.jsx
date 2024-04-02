import CultivateWealth from "./components/CultivateWealth/CultivateWealth"
import Banner from "./components/banner/Banner"
import AnimatedDrawer from "./components/navbar/Navbar"
import PaymentSolution from "./components/paymentSolution/PaymentSolution"
import Pursuit from "./components/pursuit/Pursuit"

function App() {

  return (
    <>
      <div className="bg-[#F7F7F5]">
        <AnimatedDrawer />
        <Banner />
        <PaymentSolution />
      </div>
      <CultivateWealth />
      <div className="bg-[#F7F7F5]">
        <Pursuit />
      </div>
    </>
  )
}

export default App
