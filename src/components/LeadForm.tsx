import { useState } from "react";
import { useCreateLead, useUpdateLeadRole } from "@/hooks/use-leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Lead } from "@shared/schema";

const ROLES = [
  { id: "builder", label: "Builder / Engineer" },
  { id: "knowledge_worker", label: "Knowledge Worker" },
  { id: "research", label: "Research / Strategy" },
  { id: "exploring", label: "Exploring" },
] as const;

export function LeadForm() {
  const [email, setEmail] = useState("");
  const [lead, setLead] = useState<Lead | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
  const { toast } = useToast();
  const createLead = useCreateLead();
  const updateRole = useUpdateLeadRole();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const source = urlParams.get("utm_source") || "direct";
      
      const newLead = await createLead.mutateAsync({ email, source });
      setLead(newLead);
      toast({ description: "Access request received." });
    } catch (err: any) {
      toast({
        variant: "destructive",
        description: err.message,
      });
    }
  };

  const handleRoleSelect = async (roleId: string) => {
    if (!lead || selectedRole) return;
    
    try {
      setSelectedRole(roleId);
      await updateRole.mutateAsync({ 
        id: lead.id, 
        roleTag: roleId as any 
      });
      toast({ description: "Profile updated. We'll be in touch." });
    } catch (err: any) {
      setSelectedRole(null);
      toast({
        variant: "destructive",
        description: "Failed to save preference. Please try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-md mt-12 mb-24">
      <AnimatePresence mode="wait">
        {!lead ? (
          <motion.form
            key="email-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleEmailSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-0 relative">
              <Input
                type="email"
                placeholder="email@address.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pr-12 bg-transparent border-foreground/20 focus:border-foreground transition-all duration-300"
                disabled={createLead.isPending}
              />
              <Button
                type="submit"
                variant="mono"
                className="absolute right-0 top-0 h-full px-4 border-l border-y-0 border-r-0 border-foreground/20 hover:bg-foreground/5"
                disabled={createLead.isPending}
              >
                {createLead.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground font-mono mt-2">
              Request early access.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="role-selection"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-medium font-display flex items-center gap-2">
                <Check className="h-4 w-4 text-foreground" />
                You're in.
              </h3>
              <p className="text-muted-foreground text-sm">
                Optional: what best describes you?
              </p>
            </div>

            <div className="grid gap-2">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  disabled={!!selectedRole || updateRole.isPending}
                  className={cn(
                    "w-full text-left px-4 py-3 text-sm font-mono border transition-all duration-200",
                    selectedRole === role.id 
                      ? "bg-foreground text-background border-foreground" 
                      : "bg-transparent border-border hover:border-foreground/50 hover:bg-foreground/5",
                    selectedRole && selectedRole !== role.id && "opacity-40 cursor-not-allowed"
                  )}
                >
                  <span className="mr-2 opacity-50">
                    {selectedRole === role.id ? "[x]" : "[ ]"}
                  </span>
                  {role.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
