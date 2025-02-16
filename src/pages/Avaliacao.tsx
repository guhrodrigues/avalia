
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AvaliacaoPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/tipo-produto");
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
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Avaliação de produto
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="productName" className="text-primary">
                Nome do produto
              </Label>
              <Input
                id="productName"
                placeholder="Digite o nome do produto"
                className="bg-white/5"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productType" className="text-primary">
                Tipo
              </Label>
              <Button
                onClick={handleNext}
                className="w-full justify-between text-left"
                variant="outline"
              >
                Selecionar
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AvaliacaoPage;
