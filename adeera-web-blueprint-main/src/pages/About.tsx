
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Target, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building Africa's Leading <span className="text-primary">SaaS Enablement Platform</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ADEERA UNITECH LIMITED is a visionary technology startup committed to transforming how African businesses access, implement, and scale with cloud-based software. Founded with a passion for digital inclusion, we aim to offer Software-as-a-Service (SaaS) that is localized, affordable, and scalable — starting with powerful platforms like Salesforce, HubSpot, Zoho, Microsoft, and AWS.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a founder-led startup, we are actively building partnerships with global vendors to help bring advanced CRM, cybersecurity, and cloud tools to startups, SMEs, and enterprises across Africa.
            </p>
          </div>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Building2 className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To democratize access to world-class software solutions across Africa
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become Africa's leading SaaS enablement platform by 2030
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Innovation, integrity, and inclusive growth for all African businesses
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Our Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bridging the digital divide and accelerating Africa's tech transformation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Founder Story */}
        <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">A Founder-Led Journey</h2>
          <p className="text-muted-foreground leading-relaxed text-center">
            Born from the understanding that African businesses deserve access to the same cutting-edge tools 
            that drive global enterprises, ADEERA UNITECH LIMITED was founded to bridge this gap. Our 
            founder-led approach ensures that every decision is made with African businesses in mind, 
            focusing on practical solutions that drive real growth and transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
