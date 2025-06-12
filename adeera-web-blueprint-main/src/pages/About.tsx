import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Building2, Target, Users, Globe, Award, TrendingUp, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '15+', label: 'SaaS Solutions Deployed', icon: Target },
    { number: '98%', label: 'Client Satisfaction Rate', icon: Award },
    { number: '24/7', label: 'Support Coverage', icon: Users }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'ADEERA UNITECH was established with a vision to democratize SaaS access across Africa'
    },
  //  {
    //  year: '2024',
    //  title: 'First Partnerships',
     // description: 'Secured strategic partnerships with leading global SaaS providers'
   // },
    //{
    //  year: '2024',
     // title: 'Market Expansion',
     // description: 'Extended services across multiple African countries with localized support'
    //},
    //{
     // year: '2025',
     // title: 'Future Growth',
     // description: 'Planned launch of our comprehensive SaaS marketplace platform'
    //}
  ];

  const teamMembers = [
    {
      name: 'CEO & Founder',
      role: 'Visionary Leader',
      description: 'Driving digital transformation across Africa with 10+ years of experience in enterprise software',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Building Africa's Leading <span className="text-primary">SaaS Enablement Platform</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Transforming how African businesses access, implement, and scale with world-class cloud-based software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/services">
                    Explore Our Services 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                alt="Modern workspace with laptops showing code"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ADEERA UNITECH LIMITED was born from a simple yet powerful observation: African businesses deserve access to the same cutting-edge tools that drive global enterprises. Founded with a passion for digital inclusion, we bridge the gap between world-class SaaS solutions and the unique needs of African markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a founder-led startup, every decision we make is guided by our deep understanding of local business challenges and our commitment to practical, scalable solutions that drive real growth and transformation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Founded 2023</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Team collaborating in modern office"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Vision Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Foundation</h2>
            <p className="text-muted-foreground">The core principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Building2 className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To democratize access to world-class software solutions across Africa, empowering businesses to compete globally.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Target className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become Africa's leading SaaS enablement platform by 2030, connecting every business to the tools they need.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Users className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Innovation, integrity, and inclusive growth for all African businesses, regardless of size or industry.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <Globe className="h-12 w-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bridging the digital divide and accelerating Africa's technological transformation, one business at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our mission to transform African business technology</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-sm text-primary font-semibold mb-2">{item.year}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">Experienced leaders driving innovation across Africa</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover shadow-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <div className="text-primary font-semibold mb-4">{member.role}</div>
                      <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-0 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"></div>
            <CardContent className="relative p-12">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join hundreds of African businesses that have already started their digital transformation journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <Link to="/services">
                    Explore Our Solutions 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
