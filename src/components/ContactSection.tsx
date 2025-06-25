import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
}

const ContactSection = ({
  title = "Get In Touch",
  subtitle = "Ready to source quality gravel? Contact us today for a free consultation and quote.",
  address = "456 Mining Road, Gravel Valley, GV 67890",
  phone = "0917 513 5902",
  email = "info@gravelmax.com",
  mapUrl ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2096.4178990704418!2d121.04805632002314!3d14.551735509488678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f3ddb01e3d%3A0xde4730bf1c9ae667!2sORE%20Central!5e1!3m2!1sen!2sph!4v1750314491871!5m2!1sen!2sph",
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.projectType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aggregate">
                        Aggregate Supply
                      </SelectItem>
                      <SelectItem value="bulk">Bulk Gravel Sales</SelectItem>
                      <SelectItem value="screening">
                        Custom Screening
                      </SelectItem>
                      <SelectItem value="delivery">
                        Delivery Services
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your gravel needs..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden h-64 md:h-80 shadow-lg">
              {/* This would be replaced with an actual map component in a real implementation */}
              <img
                src={mapUrl}
                alt="Map of service area"
                className="w-full h-full object-cover"
              />
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-slate-600">{address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-slate-600">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-slate-600">{email}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Monday - Friday</div>
                    <div>8:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>9:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
