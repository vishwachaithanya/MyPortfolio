import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput } from "../shared/routes";
import { useToast } from "./use-toast";

export function useCreateMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.messages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      
      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: error.message || "Please try again later.",
      });
    }
  });
}
