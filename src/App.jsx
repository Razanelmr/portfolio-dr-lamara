import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Heart, 
  Stethoscope, 
  Hospital, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  Activity,
  Shield,
  Clock,
  Star,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import './App.css'

// Import des images
import medicalHero from './assets/medical-hero.jpg'
import doctorProfile from './assets/doctor-profile.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  // Gestion du scroll pour la navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'presentation', 'experience', 'competences', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const experiences = [
    {
      title: "Médecin du Club de Football RSB",
      location: "Constantine",
      period: "Décembre 2024 - Présent",
      description: "Prise en charge médicale des joueurs, interventions d'urgence sur le terrain, gestion des blessures et pathologies, bilans médicaux réguliers, accompagnement en déplacements, programmes de prévention."
    },
    {
      title: "Médecin Généraliste de garde",
      location: "Clinique AVICENNE CPMA",
      period: "Octobre 2024 - Présent",
      description: "Consultations médicales de garde, diagnostic et traitement des pathologies courantes et urgentes, prescriptions et administrations de traitements, réalisation d'ECG, orientation vers spécialistes."
    },
    {
      title: "Médecin Généraliste de garde",
      location: "Cabinet médical Belle Cour",
      period: "Juin 2024 - Présent",
      description: "Consultations de garde, diagnostic et traitement des pathologies courantes et urgentes, soins médicaux spécialisés, réalisation d'examens complémentaires."
    },
    {
      title: "Médecin Généraliste",
      location: "Clinique Massinissa",
      period: "Juin 2023 - Novembre 2023",
      description: "Diagnostic et traitement des maladies courantes, gestion des pathologies chroniques (diabète, hypertension, maladies cardiovasculaires), prise en charge des urgences médicales."
    }
  ]

  const competences = [
    { name: "Médecine Générale", level: 95, icon: Stethoscope },
    { name: "Médecine d'Urgence", level: 90, icon: Activity },
    { name: "Cardiologie", level: 85, icon: Heart },
    { name: "Médecine Préventive", level: 88, icon: Shield },
    { name: "Gestion des Pathologies Chroniques", level: 92, icon: Clock },
    { name: "Médecine du Sport", level: 80, icon: Users }
  ]

  const services = [
    {
      title: "Consultations Générales",
      description: "Diagnostic et traitement des pathologies courantes, suivi médical personnalisé",
      icon: Stethoscope
    },
    {
      title: "Médecine Préventive",
      description: "Bilans de santé, dépistage, programmes de prévention adaptés",
      icon: Shield
    },
    {
      title: "Gestion des Maladies Chroniques",
      description: "Suivi du diabète, hypertension, maladies cardiovasculaires",
      icon: Heart
    },
    {
      title: "Médecine d'Urgence",
      description: "Prise en charge des urgences médicales, soins d'urgence",
      icon: Activity
    },
    {
      title: "Médecine du Sport",
      description: "Suivi médical des sportifs, prévention et traitement des blessures",
      icon: Users
    },
    {
      title: "Soins Spécialisés",
      description: "Injections, perfusions, soins de plaies, ECG",
      icon: Hospital
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-sky-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">Dr. Lamara Radja</span>
            </div>
            
            {/* Navigation Desktop */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'presentation', label: 'Présentation' },
                { id: 'experience', label: 'Expérience' },
                { id: 'competences', label: 'Compétences' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-sky-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'presentation', label: 'Présentation' },
                { id: 'experience', label: 'Expérience' },
                { id: 'competences', label: 'Compétences' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-sky-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Section Accueil */}
      <section id="accueil" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Médecin Généraliste Certifié
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 leading-tight">
                  Dr. Lamara Radja
                </h1>
                <p className="text-xl text-blue-700 font-medium">
                  Médecin Généraliste Passionné
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Médecin généraliste avec une solide expérience dans le diagnostic, le traitement et la gestion des patients de tous âges. Passionné par la médecine préventive et curative, je m'engage à fournir des soins de santé de haute qualité avec une approche centrée sur le patient.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Prendre Rendez-vous
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('presentation')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  En savoir plus
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">07 98 13 03 46</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Constantine</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={medicalHero} 
                  alt="Illustration médicale moderne" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-sky-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation */}
      <section id="presentation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Présentation du Médecin
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez mon parcours, mes spécialités et mon engagement envers l'excellence médicale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-sky-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center space-x-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    <span>Formation et Diplômes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800">Doctorat en Médecine Humaine Générale</h4>
                    <p className="text-gray-600">Faculté de médecine, Constantine - Promotion 2015</p>
                    <p className="text-sm text-gray-500">Diplômé en Octobre 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Internat en Médecine</h4>
                    <p className="text-gray-600">Stages spécialisés dans différents services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Baccalauréat Sciences</h4>
                    <p className="text-gray-600">Lycée Tarek Ibn Ziyad, Constantine - 2012/2015</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center space-x-2">
                    <Hospital className="h-6 w-6 text-blue-600" />
                    <span>Stages Spécialisés</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Service de Pédiatrie El Mansourah</span>
                    <span className="text-sm text-gray-500">Oct 2021 - Jan 2022</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Service de Néphrologie Daksi</span>
                    <span className="text-sm text-gray-500">Jan 2022 - Avr 2022</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Service de Gynécologie CHU</span>
                    <span className="text-sm text-gray-500">Avr 2022 - Jul 2022</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Service d'Orthopédie B CHU</span>
                    <span className="text-sm text-gray-500">Jul 2022 - Oct 2022</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={doctorProfile} 
                  alt="Médecin professionnel" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-sky-200 to-blue-200 rounded-2xl -z-10"></div>
              </div>

              <Card className="border-sky-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center space-x-2">
                    <Star className="h-6 w-6 text-blue-600" />
                    <span>Spécialités</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 justify-center py-2">
                      Médecine Générale
                    </Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-800 justify-center py-2">
                      Médecine Préventive
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 justify-center py-2">
                      Diabète
                    </Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-800 justify-center py-2">
                      Hypertension
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 justify-center py-2">
                      Cardiologie
                    </Badge>
                    <Badge variant="secondary" className="bg-sky-100 text-sky-800 justify-center py-2">
                      Médecine du Sport
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Langues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600 text-white">Arabe</Badge>
                    <Badge className="bg-blue-600 text-white">Français</Badge>
                    <Badge className="bg-blue-600 text-white">Anglais</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section id="experience" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Expérience Professionnelle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un parcours riche et diversifié au service de la santé
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-sky-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-medium mb-1">{exp.location}</p>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Compétences Techniques et Humaines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des compétences développées au fil des années pour offrir les meilleurs soins
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {competences.map((comp, index) => (
              <Card key={index} className="border-sky-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <comp.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-900">{comp.name}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-sky-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${comp.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600">{comp.level}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="border-sky-200 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Empathie</h3>
                <p className="text-gray-600">Approche humaine et bienveillante avec chaque patient</p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Communication</h3>
                <p className="text-gray-600">Écoute active et communication claire avec les patients</p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Rigueur</h3>
                <p className="text-gray-600">Précision dans les diagnostics et les traitements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Services Médicaux Proposés
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins de santé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-sky-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Contact et Localisation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Prenez rendez-vous ou contactez-moi pour toute question
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-sky-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Informations de Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Téléphone Principal</p>
                      <p className="text-gray-600">07 98 13 03 46</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Téléphone Secondaire</p>
                      <p className="text-gray-600">05 57 86 15 28</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">lmr.radja@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Localisation</p>
                      <p className="text-gray-600">Constantine, Algérie</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-sky-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Horaires de Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Lundi - Vendredi</span>
                    <span className="text-blue-600 font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Samedi</span>
                    <span className="text-blue-600 font-medium">8h00 - 14h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Dimanche</span>
                    <span className="text-gray-500">Fermé</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Urgences disponibles 24h/24
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-sky-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Formulaire de Contact</CardTitle>
                  <CardDescription>
                    Envoyez-moi un message pour prendre rendez-vous ou poser vos questions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Nom</label>
                      <Input placeholder="Votre nom" className="border-sky-200 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Prénom</label>
                      <Input placeholder="Votre prénom" className="border-sky-200 focus:border-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" className="border-sky-200 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Téléphone</label>
                    <Input placeholder="Votre numéro de téléphone" className="border-sky-200 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Objet</label>
                    <Input placeholder="Objet de votre message" className="border-sky-200 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                    <Textarea 
                      placeholder="Décrivez votre demande ou vos symptômes..." 
                      rows={4}
                      className="border-sky-200 focus:border-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Envoyer le Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Carte de localisation simulée */}
          <div className="mt-12">
            <Card className="border-sky-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-900">Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-sky-100 to-blue-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-blue-900 font-semibold">Constantine, Algérie</p>
                    <p className="text-gray-600 text-sm">Carte interactive disponible sur demande</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-sky-400" />
                <span className="text-xl font-bold">Dr. Lamara Radja</span>
              </div>
              <p className="text-sky-200 mb-4">
                Médecin généraliste dévoué, offrant des soins de qualité avec une approche humaine et professionnelle.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-sky-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-sky-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-sky-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-sky-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('accueil')} className="text-sky-200 hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={() => scrollToSection('presentation')} className="text-sky-200 hover:text-white transition-colors">Présentation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-sky-200 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-sky-200 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sky-200">
                <p>📞 07 98 13 03 46</p>
                <p>📞 05 57 86 15 28</p>
                <p>✉️ lmr.radja@gmail.com</p>
                <p>📍 Constantine, Algérie</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-sky-200">
              © 2024 Dr. Lamara Radja. Tous droits réservés. | 
              <span className="ml-2">Mentions légales</span> | 
              <span className="ml-2">Politique de confidentialité</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

