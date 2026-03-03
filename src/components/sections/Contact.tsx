import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { useCreateMessage } from "../../hooks/use-messages"; // FIX YOUR PATH

const messageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type MessageInput = z.infer<typeof messageSchema>;

export function Contact() {
  const { mutate: sendMessage, isPending } = useCreateMessage();

  const form = useForm<MessageInput>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: MessageInput) {
    sendMessage(data, {
      onSuccess: () => {
        form.reset();
        alert("Message sent successfully.");
      },
      onError: () => {
        alert("Failed to send message.");
      },
    });
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Let's build something together.
          </h2>

          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <Mail size={20} />
              <span>vishwashirla@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={20} />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={20} />
              <span>+91 9885487227</span>
            </div>
          </div>
        </motion.div>

        {/* <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-card p-8 rounded-2xl shadow-lg"
        >
          <div>
            <input
              {...form.register("name")}
              placeholder="Name"
              className="w-full p-3 border rounded-lg"
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...form.register("email")}
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...form.register("message")}
              placeholder="Message"
              className="w-full p-3 border rounded-lg min-h-[120px]"
            />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full p-3 bg-black text-white rounded-lg flex justify-center gap-2 disabled:opacity-50"
          >
            {isPending ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </motion.form> */}

      </div>
    </section>
  );
}
