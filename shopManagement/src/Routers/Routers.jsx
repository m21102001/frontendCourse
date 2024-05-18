import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  AddNewCashWallet,
  AddNewDebtOwedByUs,
  AddNewFawryMachine,
  AddNewInstaPay,
  AddNewOurDebt,
  AddNewYellowCard,
  CashWallet,
  DeatailsInstaPay,
  Debt,
  DetailsCashWallet,
  DetailsNewFawryMachine,
  DetailsYellowCard,
  ErrorPage,
  FawryMachine,
  Home,
  InstaPay,
  Login,
  OurDebt,
  UpdateCashWallet,
  UpdateDebtOwedByUs,
  UpdateFawryMachine,
  UpdateInstaPay,
  UpdateOurDebt,
  UpdateYellowCard,
  YellowCard
} from '@/pages';
import { Header } from '@/layout';

const Routers = () => {
  return (
    <div className="main-div">
      <Router>
        <Header />
        <Routes>
          <Route path="/dash/elfath/" element={<Home />} />
          <Route path="/dash/elfath/login" element={<Login />} />
          <Route path="/dash/elfath/fawry-machine" element={<FawryMachine />} />
          <Route path="/dash/elfath/fawry-machine/add-fawry-machine" element={<AddNewFawryMachine />} />
          <Route path="/dash/elfath/fawry-machine/update-fawry-machine/:id" element={<UpdateFawryMachine />} />
          <Route path="/dash/elfath/fawry-machine/details-fawry-machine/:id" element={<DetailsNewFawryMachine />} />
          <Route path="/dash/elfath/cash-wallet" element={<CashWallet />} />
          <Route path="/dash/elfath/cash-wallet/add-cash-wallet" element={<AddNewCashWallet />} />
          <Route path="/dash/elfath/cash-wallet/update-cash-wallet/:id" element={<UpdateCashWallet />} />
          <Route path="/dash/elfath/cash-wallet/details-cash-wallet/:id" element={<DetailsCashWallet />} />
          <Route path="/dash/elfath/instaPay" element={<InstaPay />} />
          <Route path="/dash/elfath/instaPay/add-instaPay" element={<AddNewInstaPay />} />
          <Route path="/dash/elfath/instaPay/update-instaPay/:id" element={<UpdateInstaPay />} />
          <Route path="/dash/elfath/instaPay/details-instaPay/:id" element={<DeatailsInstaPay />} />
          <Route path="/dash/elfath/yellow-card" element={<YellowCard />} />
          <Route path="/dash/elfath/yellow-card/add-yellow-card" element={<AddNewYellowCard />} />
          <Route path="/dash/elfath/yellow-card/update-yellow-card/:id" element={<UpdateYellowCard />} />
          <Route path="/dash/elfath/yellow-card/details-yellow-card/:id" element={<DetailsYellowCard />} />
          <Route path="/dash/elfath/our-debt" element={<OurDebt/>}/>
          <Route path="/dash/elfath/our-debt/add-new-debt" element={<AddNewOurDebt/>}/>
          <Route path="/dash/elfath/our-debt/update-debt/:id" element={<UpdateOurDebt/>}/>
          <Route path="/dash/elfath/debt-owed-by-us" element={<Debt/>}/>
          <Route path="/dash/elfath/debt-owed-by-us/add-new-debt-owed-by-us" element={<AddNewDebtOwedByUs/>}/>
          <Route path="/dash/elfath/debt-owed-by-us/update-debt-owed-by-us/:id" element={<UpdateDebtOwedByUs/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>

  );
};

export default Routers;
