
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ResultadoPage = () => {
  const navigate = useNavigate();

  const resultados = [
    "Produto com aderência à pesquisa",
    "Impacto na sociedade",
    "Abrangência realizada",
    "Replicabilidade",
    "Médio teor inovativo",
    "Média complexidade"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-white/10 backdrop-blur-lg border-border p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Resultado</h2>
          <div className="space-y-4">
            {resultados.map((resultado, index) => (
              <div
                key={index}
                className="p-4 bg-white/5 rounded-lg text-primary"
              >
                {resultado}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResultadoPage;
