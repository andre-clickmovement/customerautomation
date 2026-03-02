import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import GetStarted from "./pages/GetStarted";
import BookCall from "./pages/BookCall";
import BookingConfirmed from "./pages/BookingConfirmed";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Base path for subdirectory deployment
const BASE_PATH = import.meta.env.PROD ? '/go/customerautomation' : '';

function Router() {
  return (
    <WouterRouter base={BASE_PATH}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/book-call" component={BookCall} />
        <Route path="/confirmed" component={BookingConfirmed} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider
          defaultTheme="dark"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
