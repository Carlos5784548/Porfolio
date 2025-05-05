import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Mail, Linkedin, GitlabIcon as GitHub, MapPin, Phone, Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Carlos Trod</h1>
            <h2 className="text-xl md:text-2xl mb-6 text-slate-300">Desarrollador Full Stack</h2>
            <p className="text-lg mb-8">
              Especializado en crear aplicaciones y sitios web personalizados con tecnologías como Java (Spring Boot),
              HTML, CSS, Bootstrap, MySQL y PHP.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-white text-slate-900 hover:bg-slate-200">
                <a href="#contact">Contactar</a>
              </Button>
              <Button asChild className="bg-white text-slate-900 hover:bg-slate-200">
                <a href="#experience">Ver Experiencia</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1658873361059%20%284%29.jpg-HvFONPtHadBzcS1k14PXyFa2rfbsyR.jpeg"
                alt="Carlos Trod"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <a href="#about" className="bg-white rounded-full p-2 mb-4 shadow-lg animate-bounce">
            <ChevronDown className="h-6 w-6 text-slate-900" />
          </a>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-slate-100 py-4 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:carlospedrotrod@gmail.com" className="hover:text-slate-900">
                carlospedrotrod@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+5426045144451" className="hover:text-slate-900">
                +54 2604 514451
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Esperanza, Santa Fe, Argentina</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>24 años</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://linkedin.com/in/carlos-pedro-trod"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900"
              >
                linkedin.com/in/carlos-pedro-trod
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sobre Mí</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Soy un Desarrollador Full Stack con experiencia en la creación de aplicaciones y sitios web
              personalizados. Me especializo en tecnologías como Java (Spring Boot), HTML, CSS, Bootstrap, MySQL y PHP,
              C++.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Proactivo, organizado y con habilidades interpersonales sólidas. Busco oportunidades desafiantes para
              seguir creciendo profesionalmente y aportar valor a través de soluciones tecnológicas innovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Lenguajes</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-700">Java (Spring Boot)</Badge>
                  <Badge className="bg-slate-700">PHP</Badge>
                  <Badge className="bg-slate-700">C++</Badge>
                  <Badge className="bg-slate-700">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-700">HTML5</Badge>
                  <Badge className="bg-slate-700">CSS3</Badge>
                  <Badge className="bg-slate-700">Bootstrap</Badge>
                  <Badge className="bg-slate-700">React</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-700">APIs RESTful</Badge>
                  <Badge className="bg-slate-700">Microservicios</Badge>
                  <Badge className="bg-slate-700">JWT</Badge>
                  <Badge className="bg-slate-700">Spring Security</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">DevOps/Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-700">Git/GitHub</Badge>
                  <Badge className="bg-slate-700">Docker (básico)</Badge>
                  <Badge className="bg-slate-700">Postman</Badge>
                  <Badge className="bg-slate-700">WordPress</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Bases de Datos</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-700">MySQL</Badge>
                  <Badge className="bg-slate-700">Optimización de consultas SQL</Badge>
                  <Badge className="bg-slate-700">JOINs y subconsultas</Badge>
                  <Badge className="bg-slate-700">Stored Procedures</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Conocimientos Complementarios</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-700">Redes informáticas</Badge>
                  <Badge className="bg-slate-700">Seguridad electrónica</Badge>
                  <Badge className="bg-slate-700">Inglés (básico)</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Profesional</h2>

          <div className="max-w-3xl mx-auto space-y-12">
            <div className="relative pl-8 border-l-2 border-slate-300">
              <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
              <div>
                <h3 className="text-xl font-bold">Aremat Puerto – Desarrollador Web</h3>
                <p className="text-slate-500 mb-4">Abril 2023 – Abril 2025 | Santa Fe</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Desarrollo completo de arematpuerto.com.ar con WordPress.</li>
                  <li>Tecnologías utilizadas: HTML5, CSS3, JavaScript, PHP.</li>
                  <li>Soporte técnico general.</li>
                  <li>
                    Implementación de un CMS personalizado en WordPress, mejorando la eficiencia de actualización de
                    contenido en un 30%.
                  </li>
                  <li>
                    Integración de pasarelas de pago (ej: Mercado Pago, Payway) aumentando las conversiones en un 15%.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-300">
              <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
              <div>
                <h3 className="text-xl font-bold">Independiente – Desarrollador Full Stack</h3>
                <p className="text-slate-500 mb-4">Diciembre 2024 – Presente</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Construcción de APIs RESTful robustas y escalables.</li>
                  <li>Implementación de microservicios.</li>
                  <li>Integración con autenticación JWT.</li>
                  <li>Conexión con bases de datos MySQL optimizadas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Educación y Certificaciones</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6">Educación</h3>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-slate-300">
                  <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
                  <div>
                    <h4 className="text-lg font-semibold">Universidad Nacional del Litoral</h4>
                    <p className="text-slate-600">Ingeniería en Informática (2° año)</p>
                    <p className="text-slate-500">2020 – Presente</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-slate-300">
                  <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
                  <div>
                    <h4 className="text-lg font-semibold">Universidad Nacional del Litoral</h4>
                    <p className="text-slate-600">
                      Tecnicatura en Informática Aplicada al Diseño Multimedial y de Sitios Web
                    </p>
                    <p className="text-slate-500">2020 – 2023 (Finalizada)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Certificaciones</h3>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-slate-300">
                  <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
                  <div>
                    <h4 className="text-lg font-semibold">Ciberseguridad Cisco</h4>
                    <p className="text-slate-600">Academia de Networking (2024)</p>
                    <p className="text-slate-500">Configuración de firewalls y prevención de intrusiones</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-slate-300">
                  <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
                  <div>
                    <h4 className="text-lg font-semibold">Fundamentos de Programación</h4>
                    <p className="text-slate-600">UTN (2019)</p>
                    <p className="text-slate-500">Lógica algorítmica y estructuras de datos</p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-slate-300">
                  <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[9px] top-1"></div>
                  <div>
                    <h4 className="text-lg font-semibold">Técnico en Seguridad Electrónica</h4>
                    <p className="text-slate-600">Academia Nexcam (2019)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Intereses</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Desarrollo de software</h3>
                <p className="text-slate-600">Desarrollo de software y nuevas tecnologías.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Seguridad informática</h3>
                <p className="text-slate-600">Seguridad informática y buenas prácticas en ciberseguridad.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Innovación web</h3>
                <p className="text-slate-600">
                  Innovación en soluciones web con frameworks como Spring Boot y WordPress.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Optimización de bases de datos</h3>
                <p className="text-slate-600">Optimización de bases de datos y arquitectura backend.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Aprendizaje continuo</h3>
                <p className="text-slate-600">Aprendizaje continuo de lenguajes de programación y estándares web.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Redes informáticas</h3>
                <p className="text-slate-600">Redes informáticas y configuración de sistemas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-300" />
                  <a href="mailto:carlospedrotrod@gmail.com" className="hover:text-slate-300 transition-colors">
                    carlospedrotrod@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-300" />
                  <a href="tel:+5426045144451" className="hover:text-slate-300 transition-colors">
                    +54 2604 5144451
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-slate-300" />
                  <a
                    href="https://linkedin.com/in/carlos-pedro-trod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-300 transition-colors"
                  >
                    linkedin.com/in/carlos-pedro-trod
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-300" />
                  <span>Esperanza, Santa Fe, Argentina</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                  ></textarea>
                </div>

                <Button className="w-full bg-white text-slate-900 hover:bg-slate-200">Enviar mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Carlos Trod. Todos los derechos reservados.</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/carlos-pedro-trod"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a href="mailto:carlospedrotrod@gmail.com" className="hover:text-slate-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
