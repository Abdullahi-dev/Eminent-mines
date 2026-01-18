import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  membershipType: z.string().min(1, "Select membership"),
  profession: z.string().min(2, "Profession is required"),
  yearsExperience: z.string().min(1, "Required"),
});

export function RegistrationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      membershipType: "",
      profession: "",
      yearsExperience: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await apiRequest("POST", "/api/registration", values);
      // Reset form immediately after successful API call
      form.reset({
        fullName: "",
        email: "",
        phone: "",
        membershipType: "",
        profession: "",
        yearsExperience: "",
      });
      toast.success("Registration Submitted", {
        description: "We will contact you with next steps.",
      });
    } catch (err: any) {
      toast.error("Failed to submit registration", {
        description: err?.message || "Please try again later.",
      });
    }
  }

  return (
    <Card className="border-t-4 border-t-primary shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-heading">Membership Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Dr. / Engr. / Mr. / Ms." {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
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
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+234..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="membershipType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Membership Tier</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tier" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="student">Student Member</SelectItem>
                      <SelectItem value="professional">Professional Member</SelectItem>
                      <SelectItem value="corporate">Corporate Member</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profession</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Mining Engineer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="yearsExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             </div>
            <Button type="submit" className="w-full font-bold bg-zinc-900 hover:bg-zinc-800">Submit Registration</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
