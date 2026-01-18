import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { FileText } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Please select gender"),
  nationality: z.string().min(1, "Nationality is required"),
  stateOfOrigin: z.string().min(1, "State of origin is required"),
  program: z.string().min(1, "Please select a program"),
  education: z.string().min(1, "Please select education level"),
  institutionAttended: z.string().min(1, "Previous institution is required"),
  yearOfGraduation: z.string().min(4, "Invalid year"),
  employmentStatus: z.string().min(1, "Employment status is required"),
  message: z.string().optional(),
});

export function ApplicationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      stateOfOrigin: "",
      program: "",
      education: "",
      institutionAttended: "",
      yearOfGraduation: "",
      employmentStatus: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await apiRequest("POST", "/api/application", values);
      // Reset form immediately after successful API call
      form.reset({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        stateOfOrigin: "",
        program: "",
        education: "",
        institutionAttended: "",
        yearOfGraduation: "",
        employmentStatus: "",
        message: "",
      });
      toast.success("Application Submitted", {
        description: "We will review and reach out via email.",
      });
    } catch (err: any) {
      toast.error("Failed to submit application", {
        description: err?.message || "Please try again later.",
      });
    }
  }

  return (
    <Card className="border-t-4 border-t-primary shadow-xl rounded-2xl overflow-hidden">
      <CardHeader className="bg-zinc-50 border-b border-zinc-100 py-6">
        <CardTitle className="text-xl font-black font-heading text-zinc-900 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" /> Comprehensive Admission Form
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary border-b border-primary/10 pb-2">Personal Information</h4>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-zinc-700">Full Name (Surname First)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. ABBA, Musa Mohammed" className="h-12 rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="musa@example.com" className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">WhatsApp Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+234..." className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">Date of Birth</FormLabel>
                      <FormControl>
                        <Input type="date" className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">Gender</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 rounded-xl">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">Nationality</FormLabel>
                      <FormControl>
                        <Input className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stateOfOrigin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">State of Origin</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Kano" className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary border-b border-primary/10 pb-2">Academic Background</h4>
              <FormField
                control={form.control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-zinc-700">Highest Educational Qualification</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select Qualification" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ssce">SSCE / WAEC / NECO</SelectItem>
                        <SelectItem value="ond">National Diploma (ND/OND)</SelectItem>
                        <SelectItem value="hnd">Higher National Diploma (HND)</SelectItem>
                        <SelectItem value="bsc">Bachelor's Degree (B.Sc/B.Eng)</SelectItem>
                        <SelectItem value="msc">Master's Degree (M.Sc)</SelectItem>
                        <SelectItem value="phd">Doctorate (PhD)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="institutionAttended"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-zinc-700">Institution Attended</FormLabel>
                    <FormControl>
                      <Input placeholder="Name of School / University" className="h-12 rounded-xl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="yearOfGraduation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">Year of Graduation</FormLabel>
                      <FormControl>
                        <Input placeholder="YYYY" className="h-12 rounded-xl" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employmentStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-zinc-700">Current Employment Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 rounded-xl">
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="employed">Employed</SelectItem>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="self-employed">Self-Employed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary border-b border-primary/10 pb-2">Program Selection</h4>
              <FormField
                control={form.control}
                name="program"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-zinc-700">Course of Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select Academic Program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="executive-management">Executive Mine Management (PD)</SelectItem>
                        <SelectItem value="mineral-exploration">Advanced Mineral Exploration (TC)</SelectItem>
                        <SelectItem value="safety-excellence">Operational Safety Excellence (MC)</SelectItem>
                        <SelectItem value="technical-drilling">Technical Drilling Operations</SelectItem>
                        <SelectItem value="blasting-tech">Blasting & Explosives Technology</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full font-bold bg-zinc-900 hover:bg-zinc-800">Submit Application</Button>
            <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest font-bold">EMRL Official Admissions Portal v2.0</p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
