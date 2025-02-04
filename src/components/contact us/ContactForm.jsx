"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9\s-]{10,14}$/, "Invalid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message too long"),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
  });

  function onSubmit(values) {
    console.log("Form submitted:", values);
    // Add your form submission logic here
  }

  return (
    <div className="max-w-3xl mx-auto p-6 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="focus-visible:ring-2 focus-visible:ring-star_color_2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                    className="focus-visible:ring-2 focus-visible:ring-star_color_2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    {...field}
                    className="focus-visible:ring-2 focus-visible:ring-star_color_2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    {...field}
                    className="min-h-[120px] focus-visible:ring-2 focus-visible:ring-star_color_2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="group flex gap-3 bg-star_color_1  p-2 lg:p-3 hover:bg-star_color_2 lg:text-lg transition-all hover:scale-105">
            <span>Submit</span>
            <IconArrowNarrowRight
              size={24}
              stroke={3}
              className="-rotate-45 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </form>
      </Form>
    </div>
  );
}
