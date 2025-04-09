// Removed unused React import
import { Card, CardBody, CardHeader, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import logo from "./assets/jeiel.png";

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <img
              src={logo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            Jeiel Lima Miranda
          </h1>
          <p className="text-xl text-default-500">
            O cristão, segue os princípios deixado por Jesus Cristo.
Os religiosos, seguem os princípios deixados por uma religião específica.
          </p>
          <div className="flex gap-4">
          <Button
            color="primary"
            variant="solid"
            startContent={<Icon icon="lucide:mail" />}
            onMouseDown={() =>window.open('mailto:jeiel.lima.miranda@gmail.com')}
            onTouchStart={() => window.open('mailto:jeiel.lima.miranda@gmail.com')}
          >
            Contato
          </Button>
          <a href="https://jeiel0rbit.github.io/jeiel-lima-miranda/" target="_blank" rel="noopener noreferrer">
          <Button
            variant="bordered"
            startContent={<Icon icon="lucide:file-text" />}
          >
             Currículo
          </Button>
        </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Sobre Mim
          </h2>
          <p className="text-default-500 leading-relaxed mb-6">
            Sou pós-graduado em Segurança Digital pela UNAMA. Técnico em Informática pelo T&T Cursos. Experiente em desenvolver robôs (chatbots) para Telegram e Discord. Derrubo sites ilegais de golpistas em conjunto com provedores de hospedagem. De forma honesta e justa, procuro sempre que possível deixar a internet mais segura para as pessoas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-small text-default-500">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <a href="https://github.com/Jeiel0rbit" className="flex flex-col items-center">
                <div className="flex justify-center items-center text-2xl font-bold text-primary">
                  <Icon icon="lucide:github" />
                  <span className="ml-2">100+</span>
                </div>
                <div className="text-small text-default-500">Projetos Criados</div>
              </a>
            </div>
            <div className="text-center">
              <div className="flex justify-center font-bold text-primary text-3xl"><Icon icon="lucide:shield" /></div>
              <div className="text-small text-default-500">Segurança em Todos os Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-small text-default-500">Satisfação ao Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="border border-default-200 m-4">
            <CardHeader className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl font-bold text-foreground">Domínio Security</h3>
              <p className="text-default-500">Ideal para proteção contra ataques cibernéticos</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold text-primary">R$ 35</span>
                 <span className="text-small text-default-500">/mês</span>
              </div>
            </CardHeader>
            <Divider/>
            <br/>
            <br/>
            <CardBody>
              <ul className="space-y-4">
                {[
                  "Proteção contra ataques DDoS,",
                  "Proteção contra Bots,",
                  "Proteção contra Crawler,",
                  "Certificado SSL,",
                  '1 domínio ".com.br,"',
                  "e assistência contínua."
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-success" />
                    <span className="text-default-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/5591988544585?text=Sobre%20Orçamento%20DS`} target="_blank" rel="noopener noreferrer"><Button 
                color="primary" 
                size="lg" 
                className="w-full mt-6"
                startContent={<Icon icon="lucide:zap" />}
              >
                Orçamento
              </Button>
              </a>
            </CardBody>
          </Card>
          <Card className="border border-default-200 m-4">
            <CardHeader className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl font-bold text-foreground">Website Standard</h3>
              <p className="text-default-500">Ideal para portfólios ou Link Bio</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold text-primary">R$ 200</span>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <ul className="space-y-4">
                {[
                  "Website Customizado.",
                  "Design Adaptado Conforme o Dispositivo.",
                  "SEO (Otimização para Mecanismos de Busca).",
                  "1 página.",
                  "Segurança Contra Ataques Cibernéticos."
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Icon icon="lucide:check" className="text-success" />
                    <span className="text-default-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/5591988544585?text=Sobre%20Orçamento%20WS`} target="_blank" rel="noopener noreferrer"><Button 
                color="primary" 
                size="lg" 
                className="w-full mt-6"
                startContent={<Icon icon="lucide:zap" />}
              >
                Orçamento
              </Button>
              </a>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  );
}
