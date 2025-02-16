
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight, Clock, ThumbsUp, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const navigate = useNavigate();

  const steps = [
    {
      title: "Sejam bem-vindos!",
      subtitle: "Esse aplicativo é uma ferramenta que vai te ajudar a avaliar um produto educacional",
      icon: ThumbsUp,
    },
    {
      title: "Baseado nos critérios da CAPES",
      subtitle: "Você vai entender o passo-a-passo da avaliação",
      icon: Star,
    },
    {
      title: "Otimização de tempo",
      subtitle: "E terá o resultado em poucos minutos",
      icon: Clock,
    },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/avaliacao");
    }
  };

  const CurrentIcon = steps[currentStep - 1].icon;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/10 backdrop-blur-lg border-border p-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <CurrentIcon className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-primary">
              {steps[currentStep - 1].title}
            </h1>
            <p className="text-lg mb-8 text-primary/80">
              {steps[currentStep - 1].subtitle}
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleNext}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {currentStep === totalSteps ? "Vamos começar" : "Próximo"}
              <ChevronRight className="w-5 h-5" />
            </Button>

            <div className="flex gap-2 mt-4">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index + 1 === currentStep
                      ? "bg-primary w-6"
                      : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
