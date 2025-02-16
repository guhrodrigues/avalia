
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AderenciaPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const options = [
    "Vínculo a linha de pesquisa",
    "Vínculo ao projeto",
    "Não vinculado a pesquisa"
  ];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === "Não vinculado a pesquisa") {
      // Mostrar mensagem de que não pode ser avaliado
      alert("ESSE PRODUTO NÃO PODE SER AVALIADO.");
    } else {
      navigate("/impacto");
    }
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
          <h2 className="text-2xl font-bold mb-6 text-primary">Aderência</h2>
          <div className="space-y-2">
            {options.map((option) => (
              <Button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full justify-between text-left"
                variant="outline"
              >
                {option}
                <ChevronRight className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AderenciaPage;
