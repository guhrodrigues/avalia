
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Avaliacao from "./pages/Avaliacao";
import TipoProduto from "./pages/TipoProduto";
import Aderencia from "./pages/Aderencia";
import Impacto from "./pages/Impacto";
import Aplicabilidade from "./pages/Aplicabilidade";
import Inovacao from "./pages/Inovacao";
import Complexidade from "./pages/Complexidade";
import Resultado from "./pages/Resultado";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen w-full">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/avaliacao" element={<Avaliacao />} />
            <Route path="/tipo-produto" element={<TipoProduto />} />
            <Route path="/aderencia" element={<Aderencia />} />
            <Route path="/impacto" element={<Impacto />} />
            <Route path="/aplicabilidade" element={<Aplicabilidade />} />
            <Route path="/inovacao" element={<Inovacao />} />
            <Route path="/complexidade" element={<Complexidade />} />
            <Route path="/resultado" element={<Resultado />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
