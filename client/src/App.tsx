import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
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
