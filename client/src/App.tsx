import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import CheckoutForm from "./components/CheckoutForm";
import ConfirmationPage from "./components/ConfirmationPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AccountPage from "./components/AccountPage";
import DevicesPage from "./components/DevicesPage";
import NotFound from "./components/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/checkout" component={CheckoutForm} />
      <Route path="/confirmation" component={ConfirmationPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/devices" component={DevicesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AppProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;