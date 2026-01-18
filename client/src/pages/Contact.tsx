import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };
    try {
      await apiRequest("POST", "/api/contact", payload);
      toast.success("Message Sent", { description: "We will reply via email." });
      // Reset form immediately after successful submission
      formElement.reset();
    } catch (err: any) {
      toast.error("Failed to send message", { description: err?.message || "Please try again later." });
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      <div className="bg-zinc-900 py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Get in touch with our team for inquiries, partnerships, or support.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg bg-zinc-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-heading mb-6">Send us a message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input name="firstName" placeholder="John" className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input name="lastName" placeholder="Doe" className="bg-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input name="email" type="email" placeholder="john@example.com" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input name="subject" placeholder="Inquiry about mining services" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea name="message" placeholder="How can we help you?" className="min-h-[150px] bg-white" />
                    </div>
                    <Button type="submit" className="w-full md:w-auto px-8 bg-primary hover:bg-primary/90 text-white font-bold h-12">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-zinc-900 text-white p-8 rounded-sm shadow-lg">
                <h4 className="text-xl font-bold font-heading mb-6 text-primary">Contact Information</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="text-primary h-6 w-6 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold mb-1">Head Office</p>
                      <p className="text-gray-400 text-sm">1st Floor UBA Building,<br />Poly Road, Tudunwada,<br />Kaduna, Nigeria.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-primary h-6 w-6 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold mb-1">Phone</p>
                      <p className="text-gray-400 text-sm">+234 907 692 9317<br />+234 906 726 3066<br />+234 706 255 5819</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-primary h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <p className="text-gray-400 text-sm">info@emrl.com.ng<br />support@emrl.com.ng</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-primary h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Business Hours</p>
                      <p className="text-gray-400 text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
