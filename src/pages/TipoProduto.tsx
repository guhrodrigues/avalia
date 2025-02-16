
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TipoProdutoPage = () => {
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();

  const productTypes = [
    "Pesquisa bibliográfica",
    "Ativos de propriedade intelectual",
    "Curso de formação",
    "Material didático",
    "Evento organizado",
    "Produto de editoração",
    "Software/App",
    "Produto de comunicação",
    "Artigo publicado em revista técnica",
    "Artigo em jornal ou revista de divulgação",
    "Resenha ou crítica",
    "Texto em catálogo de exposição ou de programa de espetáculo",
    "Tecnologia social",
    "Norma ou marco regulatório",
    "Acervo",
    "Bases de dados",
    "Relatório técnico conclusivo",
    "Manual/Protocolo",
    "Tradução",
    "Cultivar",
    "Carta, mapa ou similar",
    "Processo/Tecnologia e produto não patenteável",
    "Produtos/Processos em sigilo",
    "Taxonomia, Ontologia e Tessauros",
    "Empresa ou organização social"
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    navigate("/aderencia");
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
          <h2 className="text-2xl font-bold mb-6 text-primary">Tipo</h2>
          <div className="space-y-2">
            {productTypes.map((type) => (
              <Button
                key={type}
                onClick={() => handleTypeSelect(type)}
                className="w-full justify-between text-left"
                variant="outline"
              >
                {type}
                <ChevronRight className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default TipoProdutoPage;
