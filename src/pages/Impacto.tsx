
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ImpactoPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<"SIM" | "NAO" | null>(null);

  const handleSelect = (option: "SIM" | "NAO") => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    navigate("/aplicabilidade");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-white/10 backdrop-blur-lg border-border p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Impacto</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button 
                variant={selectedOption === "SIM" ? "default" : "outline"} 
                className={`w-full transition-colors duration-200 ${
                  selectedOption === "SIM" ? "bg-primary text-primary-foreground" : ""
                }`}
                onClick={() => handleSelect("SIM")}
              >
                SIM
              </Button>
              <Button 
                variant={selectedOption === "NAO" ? "default" : "outline"}
                className={`w-full transition-colors duration-200 ${
                  selectedOption === "NAO" ? "bg-primary text-primary-foreground" : ""
                }`}
                onClick={() => handleSelect("NAO")}
              >
                NÃO
              </Button>
            </div>
            <Button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ImpactoPage;
