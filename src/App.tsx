import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import About from './pages/About';
import WealthManagement from './pages/services/WealthManagement';
import FinancialPlanning from './pages/services/FinancialPlanning';
import TaxPlanning from './pages/services/TaxPlanning';
import InsurancePlanning from './pages/services/InsurancePlanning';
import BorrowingSolutions from './pages/services/BorrowingSolutions';
import SuccessionPlanning from './pages/services/SuccessionPlanning';
import Partners from './pages/Partners';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsConditions from './pages/TermsConditions';
import MutualFundsPage from './blogs/1.1mutual-funds';
import SIFPage from './blogs/1.2specified-investment-funds';
import PMSPage from './blogs/1.3pms-services';
import AIFPage from './blogs/1.4alternative-investment-funds';
import GoalPlanningPage from './blogs/2.1goal-based-financial-planning';
import StrategicAssetAllocationPage from './blogs/2.2strategic-asset-allocation';
import RetirementPlanningPage from './blogs/2.3retirement-planning';
import CashFlowBudgetingPage from './blogs/2.4cash-flow-management-budgeting';
import DirectTaxPlanningPage from './blogs/3.1direct-tax-planning-itr-filing';
import IndirectTaxGSTPage from './blogs/3.2indirect-tax-planning-gst-compliance';
import TaxSavingStrategiesPage from './blogs/3.3tax-saving-investment-strategies';
import TermLifeInsurancePage from './blogs/4.1term-life-insurance-advisory';
import HealthMedicalInsurancePage from './blogs/4.2health-medical-insurance';
import MotorGeneralInsurancePage from './blogs/4.3motor-general-insurance';
import InsurancePortfolioReviewPage from './blogs/4.4insurance-portfolio-review-optimization';
import HomeLoansPage from './blogs/5.1home-loans-property-finance';
import BusinessLoansMSMEPage from './blogs/5.2business-loans-msme-finance';
import PersonalLoansPage from './blogs/5.3personal-loans-consumer-finance';
import BuilderStressedAssetPage from './blogs/5.4builder-finance-stressed-asset-funding';
import EstatePlanningPage from './blogs/6.1estate-planning-wealth-transfer';
import WillTrustServicesPage from './blogs/6.2will-drafting-trust-services';
import FamilyGovernanceLegacyPage from './blogs/6.3family-governance-legacy-planning';
import ProbateEstateAdministrationPage from './blogs/6.4probate-estate-administration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/wealth-management" element={<WealthManagement />} />
            <Route path="/services/financial-planning" element={<FinancialPlanning />} />
            <Route path="/services/tax-planning" element={<TaxPlanning />} />
            <Route path="/services/insurance-planning" element={<InsurancePlanning />} />
            <Route path="/services/borrowing-solutions" element={<BorrowingSolutions />} />
            <Route path="/services/succession-planning" element={<SuccessionPlanning />} />
            <Route path="/blog/mutual-funds" element={<MutualFundsPage/>} />
            <Route path="/blog/sif" element={<SIFPage/>} />
            <Route path="/blog/pms" element={<PMSPage/>} />
            <Route path="/blog/aif" element={<AIFPage/>} />
            <Route path="/blog/goal-based-planning" element={<GoalPlanningPage/>} />
            <Route path="/blog/strategic-asset-allocation" element={<StrategicAssetAllocationPage/>} />
            <Route path="/blog/retirement-planning" element={<RetirementPlanningPage/>} />
            <Route path="/blog/cash-flow-management" element={<CashFlowBudgetingPage/>} />
            <Route path="/blog/direct-tax-planning" element={<DirectTaxPlanningPage/>} />
            <Route path="/blog/indirect-tax-planning" element={<IndirectTaxGSTPage/>} />
            <Route path="/blog/tax-saving-investment-strategies" element={<TaxSavingStrategiesPage/>} />
            <Route path="/blog/term-life-insurance" element={<TermLifeInsurancePage/>} />
            <Route path="/blog/health-insurance" element={<HealthMedicalInsurancePage/>} />
            <Route path="/blog/motor-general-insurance" element={<MotorGeneralInsurancePage/>} />
            <Route path="/blog/insurance-portfolio-review" element={<InsurancePortfolioReviewPage/>} />
            <Route path="/blog/home-loans" element={<HomeLoansPage/>} />
            <Route path="/blog/business-loans" element={<BusinessLoansMSMEPage/>} />
            <Route path="/blog/personal-loans" element={<PersonalLoansPage/>} />
            <Route path="/blog/builder-finance" element={<BuilderStressedAssetPage/>} />
            <Route path="/blog/estate-planning-wealth-transfer" element={<EstatePlanningPage/>} />
            <Route path="/blog/will-drafting-trust-services" element={<WillTrustServicesPage/>} />
            <Route path="/blog/family-governance-legacy-planning" element={<FamilyGovernanceLegacyPage/>} />
            <Route path="/blog/probate-estate-administration" element={<ProbateEstateAdministrationPage/>} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
