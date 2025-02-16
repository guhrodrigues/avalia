
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InovacaoPage = () => {
  const navigate = useNavigate();

  const options = [
    "Alto teor inovativo",
    "Médio teor inovativo",
    "Baixo teor inovativo",
    "Sem inovação aparente"
  ];

  const handleNext = () => {
    navigate("/complexidade");
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
          <h2 className="text-2xl font-bold mb-6 text-primary">Inovação</h2>
          <p className="text-primary/80 mb-6">
            Desenvolvimento com base em conhecimento inédito.
          </p>
          <div className="space-y-2">
            {options.map((option) => (
              <Button
                key={option}
                className="w-full justify-between text-left"
                variant="outline"
              >
                {option}
                <ChevronRight className="w-4 h-4" />
              </Button>
            ))}
            <Button
              onClick={handleNext}
              className="w-full mt-6 flex items-center justify-center gap-2"
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

export default InovacaoPage;
