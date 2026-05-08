"use client"

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
  GitBranch as Git,
} from "lucide-react"
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AnimatedCounter from "@/components/animated-counter";
import Magnetic from "@/components/magnetic";

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

  const particlesLoaded = async (container?: any) => {
    console.log(container);
  };

  const projectCardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const cardRotateX = useTransform(y, [0, 1], [-5, 5]);
  const cardRotateY = useTransform(x, [0, 1], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
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
              background: { color: { value: "transparent" } },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                  push: { quantity: 4 },
                  repulse: { distance: 100, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#ffffff" },
                links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
                move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
                number: { density: { enable: true }, value: 80 },
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
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" data-text="Carlos Trod">
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
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contactar
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
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
      </motion.section>

      {/* Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
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
                    <AnimatedCounter from={0} to={4} suffix="+" /> Años
                  </h3>
                  <p className="text-sm text-slate-600">Experiencia</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    <AnimatedCounter from={0} to={4} suffix="+" /> Proyectos
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
                  <p className="text-sm text-slate-600">Tecnologías</p>
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
            {/* Lenguajes */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Lenguajes</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  {["Java (Spring Boot)", "PHP", "JavaScript", "TypeScript"].map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* Frontend */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Frontend</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  {["HTML5", "CSS3", "Bootstrap", "React", "Angular", "Tailwind CSS"].map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Backend</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  {["APIs RESTful", "Microservicios", "JWT", "Spring Security", "Node.js", "Express", "Laravel", "Mercado Pago API"].map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* DevOps */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl">
                    <Git className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">DevOps</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  {["Git/GitHub", "Docker", "Postman", "WordPress", "Render"].map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 transition-all">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* Bases de Datos */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Bases de Datos</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  {["MySQL", "PostgreSQL", "Optimización SQL", "JOINs", "Stored Procedures"].map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* IA & Automatización */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">IA & Automatización</h3>
                </div>
                <motion.div className="flex flex-wrap gap-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                  {["Agentes de IA", "n8n", "Automatización", "No-Code"].map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 transition-all">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
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

          <div className="max-w-4xl mx-auto space-y-12">

            {/* Exp 1 */}
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
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-fit mt-2 md:mt-0">
                      Diciembre 2024 – Presente
                    </Badge>
                  </div>
                  <p className="text-blue-600 font-medium mb-4">Remoto</p>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      "Diseño y desarrollo backend con Java Spring Boot.",
                      "APIs REST para gestión de clientes, entrenadores, rutinas y pagos.",
                      "Integración con Mercado Pago y pagos manuales (CVU/Alias).",
                      "Manejo de estados: Pendiente, Aprobado, Rechazado.",
                      "Autenticación JWT + control de acceso por roles.",
                      "PostgreSQL con Spring Data JPA + Hibernate.",
                      "Frontend con React + TypeScript + Tailwind CSS.",
                      "Deploy en Render con variables de entorno.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Exp 2 */}
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
                    <Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white w-fit mt-2 md:mt-0">
                      Abril 2023 – Abril 2025
                    </Badge>
                  </div>
                  <p className="text-blue-600 font-medium mb-4">Santa Fe, Argentina</p>
                  <ul className="space-y-3 text-slate-700">
                    {[
                      "Desarrollo completo de arematpuerto.com.ar con WordPress.",
                      "Tecnologías utilizadas: HTML5, CSS3, JavaScript, PHP.",
                      "Implementación de un CMS personalizado en WordPress, mejorando la eficiencia de actualización de contenido en un 30%.",
                      "Integración de pasarelas de pago (Mercado Pago, Payway) aumentando las conversiones en un 15%.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24 bg-gradient-to-br from-slate-50 to-blue-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Soluciones innovadoras que demuestran mi experiencia en desarrollo full-stack
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">

            {/* Project 1 */}
            <motion.div
              ref={projectCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
              className="overflow-hidden shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm group rounded-lg"
            >
              <Card className="overflow-hidden border-0 bg-transparent">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-12 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                    <div className="text-white text-center relative z-10">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
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
                          Una aplicación full-stack completa para la gestión de tareas personales con sistema de autenticación y operaciones CRUD.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">🚀 Características principales:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { color: "bg-green-500", text: "Sistema de autenticación completo" },
                            { color: "bg-blue-500", text: "CRUD completo para tareas" },
                            { color: "bg-purple-500", text: "Interfaz responsive y moderna" },
                            { color: "bg-amber-500", text: "API RESTful robusta" },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
                              <span className="text-slate-700">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">🛠️ Stack tecnológico:</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { label: "Angular", color: "from-red-500 to-red-600" },
                            { label: "Node.js", color: "from-green-500 to-green-600" },
                            { label: "Express", color: "from-slate-500 to-slate-600" },
                            { label: "TypeScript", color: "from-blue-500 to-blue-600" },
                            { label: "JWT", color: "from-amber-500 to-amber-600" },
                            { label: "MySQL", color: "from-blue-500 to-blue-600" },
                          ].map((tech) => (
                            <Badge key={tech.label} className={`bg-gradient-to-r ${tech.color} text-white`}>{tech.label}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white">
                          <a href="https://github.com/Carlos5784548/Fullstack-Challenge-Frontend" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <GitHub className="h-4 w-4" /> Ver Frontend
                          </a>
                        </Button>
                        <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                          <a href="https://github.com/Carlos5784548/Fullstack-Challenge-Backend" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <GitHub className="h-4 w-4" /> Ver Backend
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
              className="overflow-hidden shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm group rounded-lg"
            >
              <Card className="overflow-hidden border-0 bg-transparent">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 p-12 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
                    <div className="text-white text-center relative z-10">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Sistema de Pagos</h3>
                      <p className="text-blue-200 text-lg">Backend · Fintech</p>
                      <Badge className="mt-4 bg-cyan-500 text-white animate-pulse">FEATURED</Badge>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Sistema de Pagos para Entrenadores</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          Sistema completo de gestión de gimnasio con pagos integrados. Panel de control para entrenadores con métricas y estados de pago.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">🚀 Características principales:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { color: "bg-green-500", text: "Gestión de clientes y membresías" },
                            { color: "bg-blue-500", text: "Integración con Mercado Pago" },
                            { color: "bg-purple-500", text: "Panel de control para entrenadores" },
                            { color: "bg-amber-500", text: "Reportes y métricas de pago" },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
                              <span className="text-slate-700">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-4">🛠️ Stack tecnológico:</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { label: "Java", color: "from-red-500 to-red-600" },
                            { label: "Spring Boot", color: "from-green-500 to-green-600" },
                            { label: "React", color: "from-cyan-500 to-cyan-600" },
                            { label: "TypeScript", color: "from-blue-500 to-blue-600" },
                            { label: "PostgreSQL", color: "from-indigo-500 to-indigo-600" },
                            { label: "Mercado Pago", color: "from-pink-500 to-pink-600" },
                            { label: "JWT", color: "from-amber-500 to-amber-600" },
                            { label: "Render", color: "from-slate-500 to-slate-600" },
                          ].map((tech) => (
                            <Badge key={tech.label} className={`bg-gradient-to-r ${tech.color} text-white`}>{tech.label}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
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
                        <p className="text-blue-600 font-medium mb-1">Ingeniería en Informática (3° año)</p>
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
                        <p className="text-green-600 font-medium mb-1">Tecnicatura en Informática Aplicada al Diseño Multimedial y de Sitios Web</p>
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
                {[
                  { title: "Automatización de Procesos con n8n", sub: "n8n (2025)", desc: "Diseño e implementación de flujos de trabajo automatizados", color: "from-white to-green-50", dot: "from-green-600 to-blue-600", text: "text-green-600" },
                  { title: "Ciberseguridad Cisco", sub: "Academia de Networking (2024)", desc: "Configuración de firewalls y prevención de intrusiones", color: "from-white to-red-50", dot: "from-red-600 to-orange-600", text: "text-red-600" },
                  { title: "Fundamentos de Programación", sub: "UTN (2019)", desc: "Lógica algorítmica y estructuras de datos", color: "from-white to-purple-50", dot: "from-purple-600 to-blue-600", text: "text-purple-600" },
                  { title: "Técnico en Seguridad Electrónica", sub: "Academia Nexcam (2019)", desc: "", color: "from-white to-amber-50", dot: "from-amber-600 to-yellow-600", text: "text-amber-600" },
                ].map((cert, i) => (
                  <Card key={i} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-4 h-4 bg-gradient-to-r ${cert.dot} rounded-full mt-2 flex-shrink-0`}></div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h4>
                          <p className={`${cert.text} font-medium mb-1`}>{cert.sub}</p>
                          {cert.desc && <p className="text-slate-600">{cert.desc}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        id="contact"
        className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
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
                  { icon: Mail, label: "Email", value: "carlospedrotrod@gmail.com", href: "mailto:carlospedrotrod@gmail.com", gradient: "from-blue-500 to-blue-600" },
                  { icon: Linkedin, label: "LinkedIn", value: "carlos-pedro-trod", href: "https://linkedin.com/in/carlos-pedro-trod", gradient: "from-blue-500 to-blue-600" },
                  { icon: MapPin, label: "Ubicación", value: "Esperanza, Santa Fe, Argentina", href: null, gradient: "from-amber-500 to-amber-600" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <Magnetic>
                      <div className={`p-4 bg-gradient-to-r ${contact.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                    </Magnetic>
                    <Magnetic>
                      <div>
                        <p className="text-slate-400 text-sm">{contact.label}</p>
                        {contact.href ? (
                          <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-white font-medium hover:text-blue-300 transition-colors text-lg">
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
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Nombre completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Mensaje</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                <Button
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar mensaje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-slate-900 text-white py-12 border-t border-slate-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Carlos Trod</h3>
              <p className="text-slate-400">Desarrollador Backend / Fullstack Java</p>
              <p className="text-slate-500 text-sm mt-2">
                &copy; {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/carlos-pedro-trod", gradient: "from-blue-500 to-blue-600" },
                { icon: GitHub, href: "https://github.com/Carlos5784548", gradient: "from-slate-500 to-slate-600" },
                { icon: Mail, href: "mailto:carlospedrotrod@gmail.com", gradient: "from-green-500 to-green-600" },
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
      </motion.footer>

    </div>
  )
}
