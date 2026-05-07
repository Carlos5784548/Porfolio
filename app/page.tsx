import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github as GitHub,
  MapPin,
  Calendar,
  Code,
  Database,
  Globe,
  Shield,
  Briefcase,
  GraduationCap,
  GitBranch as Git, // Changed Gift to GitBranch for better representation
} from "lucide-react"
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import AnimatedCounter from "@/components/animated-counter";
import Magnetic from "@/components/magnetic";

// Framer Motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    console.log(container);
  };

  // For project card tilt effect
  const projectCardRef = useRef(null);
  const { x, y } = useMotionValue(0);
  const cardRotateX = useTransform(y, [0, 1], [-5, 5]);
  const cardRotateY = useTransform(x, [0, 1], [-5, 5]);

  const handleMouseMove = (event) => {
    if (projectCardRef.current) {
      const rect = projectCardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      x.set(mouseX / width);
      y.set(mouseY / height);
    }
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        {particlesInit && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                },
                modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
              },
              particles: {
                color: { value: "#ffffff" },
                links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
                move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
                number: { density: { enable: true, area: 800 }, value: 80 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
              },
              detectRetina: true,
            }}
            className="absolute inset-0 z-0"
          />
        )}

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-sm font-medium">👋 Hola, soy</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent glitch" data-text="Carlos Trod">
                  Carlos Trod
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-blue-200">
                  <TypeAnimation
                    sequence={[
                      'Backend Developer', 1500,
                      'Java Engineer', 1500,
                      'Fintech Builder', 1500,
                      'API Architect', 1500,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </h2>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Especializado en crear aplicaciones y sitios web personalizados con tecnologías modernas. Transformo
                ideas en soluciones digitales innovadoras.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contactar
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost" // Changed to ghost for better contrast on gradient button
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a href="#projects" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Ver Proyectos
                  </a>
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1658873361059%20%284%29.jpg-HvFONPtHadBzcS1k14PXyFa2rfbsyR.jpeg"
                    alt="Carlos Trod"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
          <a
            href="#about"
            className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 shadow-lg animate-bounce hover:bg-white/20 transition-colors"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </a>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Info Bar */}
        <div className="bg-white border-b border-slate-200 shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm">
              <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <a href="mailto:carlospedrotrod@gmail.com" className="font-medium">
                  carlospedrotrod@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-amber-600" />
                </div>
                <span className="font-medium">Esperanza, Santa Fe, Argentina</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Calendar className="h-4 w-4 text-purple-600" />
                </div>
                <span className="font-medium">24 años</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                </div>
                <a
                  href="https://linkedin.com/in/carlos-pedro-trod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sobre Mí</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Soy un Desarrollador Backend especializado en Java y Spring Boot, con un fuerte enfoque en el sector Fintech. Mi experiencia se centra en la creación de APIs REST robustas y escalables, microservicios y la integración de sistemas de pago.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Proactivo, organizado y con habilidades interpersonales sólidas. Busco oportunidades desafiantes para
                  seguir creciendo profesionalmente y aportar valor a través de soluciones tecnológicas innovadoras.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    <AnimatedCounter from={0} to={2} suffix="+" /> Años
                  </h3>
                  <p className="text-sm text-slate-600">Experiencia</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    <AnimatedCounter from={0} to={5} suffix="+" /> Proyectos
                  </h3>
                  <p className="text-sm text-slate-600">Proyectos</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    <AnimatedCounter from={0} to={10} suffix="+" /> Tecnologías
                  </h3>
                  <p className="text-sm text-slate-600">Certificaciones</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    <AnimatedCounter from={0} to={100} suffix="%" /> Compromiso
                  </h3>
                  <p className="text-sm text-slate-600">Compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-24 bg-gradient-to-br from-slate-50 to-blue-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Habilidades Técnicas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Dominio de tecnologías modernas para crear soluciones completas y escalables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Lenguajes</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      Java (Spring Boot)
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all">
                      PHP
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 transition-all">
                      JavaScript
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 transition-all">
                      TypeScript
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Frontend</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 transition-all">
                      HTML5
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      CSS3
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all">
                      Bootstrap
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 transition-all">
                      React
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all">
                      Angular
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all">
                      Tailwind CSS
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Backend</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      APIs RESTful
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all">
                      Microservicios
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all">
                      JWT
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all">
                      Spring Security
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all">
                      Node.js
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all">
                      Express
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 transition-all">
                      Laravel
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 transition-all">
                      Mercado Pago API
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl">
                    <Git className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">DevOps</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all">
                      Git/GitHub
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      Docker
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 transition-all">
                      Postman
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      WordPress
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Bases de Datos</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      MySQL
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all">
                      Optimización SQL
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all">
                      JOINs
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all">
                      Stored Procedures
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all">
                      PostgreSQL
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Complementarios</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      Redes informáticas
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all">
                      Seguridad electrónica
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all">
                      Inglés (básico)
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">IA & Automatización</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all">
                      Agentes de IA
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      n8n
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all">
                      Automatización
                    </Badge>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Badge className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all">
                      No-Code
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Experiencia Profesional</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <motion.div
                className="relative pl-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ originY: 0 }}
                />
                <div className="absolute w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -left-[13px] top-2 border-4 border-white shadow-lg"></div>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">Proyecto Propio – Sistema de Gestión de Rutinas y Pagos</h3>
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-fit">
                        Diciembre 2024 – Presente
                      </Badge>
                    </div>
                    <p className="text-blue-600 font-medium mb-4">Remoto</p>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Diseño y desarrollo backend con Java Spring Boot.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>APIs REST para gestión de clientes, entrenadores, rutinas y pagos.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Integración con Mercado Pago y pagos manuales (CVU/Alias).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Manejo de estados: Pendiente, Aprobado, Rechazado.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Autenticación JWT + control de acceso por roles.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>PostgreSQL con Spring Data JPA + Hibernate.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Frontend con React + TypeScript + Tailwind CSS.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Deploy en Render con variables de entorno.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="relative pl-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ originY: 0 }}
                />
                <div className="absolute w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -left-[13px] top-2 border-4 border-white shadow-lg"></div>
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">Aremat Puerto – Desarrollador Web</h3>
                      <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white w-fit">
                        Abril 2023 – Abril 2025
                      </Badge>
                    </div>
                    <p className="text-blue-600 font-medium mb-4">Santa Fe, Argentina</p>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Desarrollo completo de arematpuerto.com.ar con WordPress.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Tecnologías utilizadas: HTML5, CSS3, JavaScript, PHP.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Implementación de un CMS personalizado en WordPress, mejorando la eficiencia de actualización
                          de contenido en un 30%.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Integración de pasarelas de pago (Mercado Pago, Payway) aumentando las conversiones en un 15%.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
            </div>

            <motion.div
              className="relative pl-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ originY: 0 }}
              />
              <div className="absolute w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -left-[13px] top-2 border-4 border-white shadow-lg"></div>
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">Independiente – Desarrollador Full Stack</h3>
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-fit">
                      Diciembre 2024 – Presente
                    </Badge>
                  </div>
                  <p className="text-purple-600 font-medium mb-4">Trabajo Remoto</p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Construcción de APIs RESTful robustas y escalables.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implementación de microservicios.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integración con autenticación JWT.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conexión con bases de datos MySQL optimizadas.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
          </div>
        </motion.div>
    </div>
          </div >
        </div >
      </motion.section >

    {/* Projects Section */ }
    < motion.section
  id = "projects"
  className = "py-24 bg-gradient-to-br from-slate-50 to-blue-50"
  initial = {{ opacity: 0, y: 50 }
}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, amount: 0.3 }}
transition = {{ duration: 0.6 }}
      >
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
        Soluciones innovadoras que demuestran mi experiencia en desarrollo full-stack
      </p>
    </div>

    <div className="max-w-6xl mx-auto">
      <motion.div
        ref={projectCardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
        className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm group mb-12 rounded-lg neon-glow-green"
      >
        {/* Project Card 1 */}
        <Card className="overflow-hidden border-0 bg-transparent"> {/* Inner card to avoid double border */}
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="text-white text-center relative z-10">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-2">Task Manager</h3>
                <p className="text-blue-200 text-lg">Full Stack Application</p>
              </div>
            </div>

            <div className="md:w-3/5 p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Aplicación de Gestión de Tareas</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Una aplicación full-stack completa para la gestión de tareas personales con sistema de
                    autenticación y operaciones CRUD. Permite a los usuarios registrarse, iniciar sesión y
                    administrar sus tareas de manera eficiente.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">🚀 Características principales:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700">Sistema de autenticación completo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">CRUD completo para tareas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">Interfaz responsive y moderna</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-700">API RESTful robusta</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">🛠️ Stack tecnológico:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white">Angular</Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">Node.js</Badge>
                    <Badge className="bg-gradient-to-r from-slate-500 to-slate-600 text-white">Express</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">TypeScript</Badge>
                    <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">JWT</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">MySQL</Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a
                      href="https://github.com/Carlos5784548/Fullstack-Challenge-Frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GitHub className="h-4 w-4" />
                      Ver Frontend
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a
                      href="https://github.com/Carlos5784548/Fullstack-Challenge-Backend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GitHub className="h-4 w-4" />
                      Ver Backend
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Project Card 2 */}
      <motion.div
        ref={projectCardRef} // Reusing ref for simplicity, but ideally each card would have its own
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
        className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm group rounded-lg neon-glow-cyan"
      >
        <Card className="overflow-hidden border-0 bg-transparent">
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
              <div className="text-white text-center relative z-10">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 .55.45 1 1 1h2v1.93c-.33.04-.66.07-1 .07zm8.04-3.02c-.42 1.6-1.52 2.98-2.99 3.78V15h-2v-4h4.94c-.04.32-.07.65-.07.98 0 1.38.28 2.69.79 3.87zM12 4.07V6h2v4h-2v-.93c.33-.04.66-.07 1-.07 3.95.49 7 3.85 7 7.93 0 .62-.08 1.21-.21 1.79L15 9v-1c0-.55-.45-1-1-1h-2V4.07c.33-.04.66-.07 1-.07zM4.96 9.02c.42-1.6 1.52-2.98 2.99-3.78V9h2v4H4.06c.04-.32.07-.65.07-.98 0-1.38-.28-2.69-.79-3.87z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-2">Sistema de Pagos para Entrenadores</h3>
                <p className="text-blue-200 text-lg">Backend · Fintech</p>
                <Badge className="mt-4 neon-badge-cyan">FEATURED</Badge>
              </div>
            </div>

            <div className="md:w-3/5 p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Sistema de Pagos para Entrenadores</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Sistema completo de gestión de gimnasio con pagos integrados. Incluye un panel de control para entrenadores con métricas y estados de pago, facilitando la administración de clientes y finanzas.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">🚀 Características principales:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700">Gestión de clientes y membresías</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700">Integración con Mercado Pago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">Panel de control para entrenadores</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-700">Reportes y métricas de pago</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">🛠️ Stack tecnológico:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white">Java</Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">Spring Boot</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">React</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">TypeScript</Badge>
                    <Badge className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">PostgreSQL</Badge>
                    <Badge className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">Mercado Pago</Badge>
                    <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">JWT</Badge>
                    <Badge className="bg-gradient-to-r from-slate-500 to-slate-600 text-white">Render</Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a
                      href="#" // Placeholder for project link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code className="h-4 w-4" />
                      Ver Proyecto
                    </a>
                  </Button>
                </div>
              </div>
            </div>
        </Card>
      </motion.div>
    </div>
  </div>
      </motion.section >

  {/* Education Section */ }
  < motion.section
id = "education"
className = "py-24 bg-white"
initial = {{ opacity: 0, y: 50 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, amount: 0.3 }}
transition = {{ duration: 0.6 }}
      >
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Educación y Certificaciones</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          Educación
        </h3>

        <div className="space-y-8">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Universidad Nacional del Litoral</h4>
                  <p className="text-blue-600 font-medium mb-1">Ingeniería en Informática (2° año)</p>
                  <p className="text-slate-500">2020 – Presente</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Universidad Nacional del Litoral</h4>
                  <p className="text-green-600 font-medium mb-1">
                    Tecnicatura en Informática Aplicada al Diseño Multimedial y de Sitios Web
                  </p>
                  <p className="text-slate-500">2020 – 2023 (Finalizada)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Shield className="h-6 w-6 text-amber-600" />
          </div>
          Certificaciones
        </h3>

        <div className="space-y-8">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-red-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Ciberseguridad Cisco</h4>
                  <p className="text-red-600 font-medium mb-1">Academia de Networking (2024)</p>
                  <p className="text-slate-600">Configuración de firewalls y prevención de intrusiones</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Automatización de Procesos con n8n</h4>
                  <p className="text-green-600 font-medium mb-1">
                    n8n (2025)
                  </p>
                  <p className="text-slate-600">Diseño e implementación de flujos de trabajo automatizados</p>
                </div>
              </div>
            </CardContent>
          </Card>


          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Fundamentos de Programación</h4>
                  <p className="text-purple-600 font-medium mb-1">UTN (2019)</p>
                  <p className="text-slate-600">Lógica algorítmica y estructuras de datos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Técnico en Seguridad Electrónica</h4>
                  <p className="text-amber-600 font-medium mb-1">Academia Nexcam (2019)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div> {/* End of grid */}
  </div> {/* End of container */ }
      </motion.section >

  {/* Interests Section */ }
  < motion.section
id = "interests"
className = "py-24 bg-gradient-to-br from-slate-50 to-blue-50"
initial = {{ opacity: 0, y: 50 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, amount: 0.3 }}
transition = {{ duration: 0.6 }}
      >
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Intereses Profesionales</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Desarrollo de software",
          description: "Desarrollo de software y nuevas tecnologías.",
          icon: Code,
          gradient: "from-blue-500 to-blue-600",
        },
        {
          title: "Seguridad informática",
          description: "Seguridad informática y buenas prácticas en ciberseguridad.",
          icon: Shield,
          gradient: "from-red-500 to-red-600",
        },
        {
          title: "Innovación web",
          description: "Innovación en soluciones web con frameworks como Spring Boot y WordPress.",
          icon: Globe,
          gradient: "from-green-500 to-green-600",
        },
        {
          title: "Optimización de bases de datos",
          description: "Optimización de bases de datos y arquitectura backend.",
          icon: Database,
          gradient: "from-purple-500 to-purple-600",
        },
        {
          title: "Aprendizaje continuo",
          description: "Aprendizaje continuo de lenguajes de programación y estándares web.",
          icon: GraduationCap,
          gradient: "from-amber-500 to-amber-600",
        },
        {
          title: "Redes informáticas",
          description: "Redes informáticas y configuración de sistemas.",
          icon: Globe,
          gradient: "from-teal-500 to-teal-600",
        },
      ].map((interest, index) => (
        <Card
          key={index}
          className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
        >
          <CardContent className="pt-8 pb-6 text-center">
            <div
              className={`w-16 h-16 bg-gradient-to-r ${interest.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <interest.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{interest.title}</h3>
            <p className="text-slate-600 leading-relaxed">{interest.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
      </motion.section >

  {/* Contact Section */ }
  < motion.section
initial = {{ opacity: 0, y: 50 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, amount: 0.3 }}
transition = {{ duration: 0.6 }}
id = "contact"
className = "py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
  >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-slate-300 mt-4 text-lg max-w-2xl mx-auto">
              Estoy disponible para nuevos proyectos y oportunidades. ¡Hablemos sobre tu próxima idea!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-8">Información de contacto</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "carlospedrotrod@gmail.com",
                    href: "mailto:carlospedrotrod@gmail.com",
                    gradient: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "carlos-pedro-trod",
                    href: "https://linkedin.com/in/carlos-pedro-trod",
                    gradient: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: MapPin,
                    label: "Ubicación",
                    value: "Esperanza, Santa Fe, Argentina",
                    href: null,
                    gradient: "from-amber-500 to-amber-600",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <Magnetic>
                      <div
                        className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                    </Magnetic>
                    <Magnetic>
                      <div>
                        <p className="text-slate-400 text-sm">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-white font-medium hover:text-blue-300 transition-colors text-lg"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-white font-medium text-lg">{contact.value}</span>
                        )}
                      </div>
                    </Magnetic>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8">Envíame un mensaje</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div> {/* End of grid */}
        </div> {/* End of container */ }
      </motion.section >

  {/* Footer */ }
  < motion.footer
className = "bg-slate-900 text-white py-12 border-t border-slate-800"
initial = {{ opacity: 0, y: 50 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true, amount: 0.3 }}
transition = {{ duration: 0.6 }}
      >
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">Carlos Trod</h3>
        <p className="text-slate-400">Desarrollador Full Stack</p>
        <p className="text-slate-500 text-sm mt-2">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>

      <div className="flex gap-4">
        {[
          {
            icon: Linkedin,
            href: "https://linkedin.com/in/carlos-pedro-trod",
            gradient: "from-blue-500 to-blue-600",
          },
          {
            icon: GitHub,
            href: "https://github.com/Carlos5784548",
            gradient: "from-slate-500 to-slate-600",
          },
          {
            icon: Mail,
            href: "mailto:carlospedrotrod@gmail.com",
            gradient: "from-green-500 to-green-600",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`p-3 bg-gradient-to-r ${social.gradient} rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            <Magnetic>
              <social.icon className="h-5 w-5 text-white" />
            </Magnetic>
          </a>
        ))}
      </div>
    </div>
  </div>
      </motion.footer >
    </div >
  )
}
