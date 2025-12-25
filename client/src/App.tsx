import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import SchoolOfMines from "@/pages/SchoolOfMines";
import Membership from "@/pages/Membership";
import Equipment from "@/pages/Equipment";
import Laboratory from "@/pages/Laboratory";

// Service Detail Pages
import MiningQuarry from "@/pages/services/MiningQuarry";
import GeologicalExploration from "@/pages/services/GeologicalExploration";
import WaterEngineering from "@/pages/services/WaterEngineering";
import MineralTrading from "@/pages/services/MineralTrading";
import MiningMachinery from "@/pages/services/MiningMachinery";
import MiningConsultancy from "@/pages/services/MiningConsultancy";
import ExplosivesManagement from "@/pages/services/ExplosivesManagement";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/school" component={SchoolOfMines} />
        <Route path="/membership" component={Membership} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/laboratory" component={Laboratory} />
        
        {/* Service Detail Routes */}
        <Route path="/services/mining-quarry" component={MiningQuarry} />
        <Route path="/services/geological-exploration" component={GeologicalExploration} />
        <Route path="/services/water-engineering" component={WaterEngineering} />
        <Route path="/services/mineral-trading" component={MineralTrading} />
        <Route path="/services/machinery-fabrication" component={MiningMachinery} />
        <Route path="/services/consultancy" component={MiningConsultancy} />
        <Route path="/services/explosives-management" component={ExplosivesManagement} />
        
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
