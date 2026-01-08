import { motion } from "framer-motion";

interface CTASectionProps {
  variants?: any;
}

export function CTASection({ variants }: CTASectionProps) {
  return (
    <motion.section
      variants={variants}
      className="border-t border-border pt-16"
    >
      <div className="max-w-md space-y-4">
        <p className="text-base font-medium text-foreground">
          Early access is limited.
        </p>

        <p className="text-sm text-muted-foreground">
          Join to receive private architecture briefings, foundational updates,
          and early disclosures as CTS takes shape.
        </p>

        <p className="text-xs font-mono text-muted-foreground/60 pt-2">
          // This is not a newsletter. It’s an early signal channel.
        </p>

        {/* Email form remains owned by parent for now */}
      </div>
    </motion.section>
  );
}
