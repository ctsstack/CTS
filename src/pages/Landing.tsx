import { motion } from "framer-motion";
import { CTASection } from "../components/CTASection";

export default function Landing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex justify-center selection:bg-foreground selection:text-background">
      <div className="w-full max-w-[640px] px-6 py-28 md:py-36">
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.header variants={itemVariants} className="space-y-10">
            <div className="inline-block border border-foreground/20 px-3 py-1 text-xs font-mono uppercase tracking-widest opacity-60">
              Protocol v0.1
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05] tracking-tight">
              CTS — The Missing Layer of Personal Computing
            </h1>
          </motion.header>

          {/* Failure */}
          <motion.section
            variants={itemVariants}
            className="space-y-6 max-w-2xl"
          >
            <p className="text-lg">
              Every knowledge worker eventually encounters the same quiet failure.
            </p>

            <p className="text-base text-muted-foreground">
              When they return to their work following an interruption, it is impossible to return to the same state they recently exited.
            </p>

            <p className="text-base text-muted-foreground">
              Files are still there. Tabs haunt cognition. Notes echo creativity.
            </p>

            <p className="text-lg font-medium text-foreground">
              But the intent, context, and progress of this near-effortless continuity have quietly disappaited.
            </p>
          </motion.section>

          {/* Cost */}
          <motion.section
            variants={itemVariants}
            className="space-y-6 max-w-3xl border-l border-foreground/10 pl-6"
          >
            <p className="text-sm opacity-60">
              The effort required to reconstruct that mental state is a
              hidden tax, to be repeated too many times a day.
            </p>

            <p className="text-2xl font-medium text-foreground">
              CTS exists to eliminate that tax.
            </p>

            <p className="text-base text-muted-foreground">
              By providing durable continuity beneath our tools — so work can be
              resumed instead of rebuilt.
            </p>
          </motion.section>

          {/* Landscape */}
          <motion.section
            variants={itemVariants}
            className="space-y-6 max-w-3xl text-base leading-relaxed text-muted-foreground"
          >
            <p>
              Today, knowledge work is navigated via numerous windows, tabs, notes,
              files, and apps that demand attention and preserve no continuity
            </p>

            <p>
              Each tool works in isolation. Every workflow has amnesia.
              <br />
              No system knows what you’re doing, why you’re doing it, or what you
              did yesterday. No system mirrors human creativity
            </p>

            <p>
              The result: cognitive overhead, fractured attention, and
              disrupted continuity.
            </p>
          </motion.section>

          {/* Intervention */}
          <motion.section
            variants={itemVariants}
            className="space-y-6 max-w-3xl"
          >
            <p className="text-lg text-foreground">
              CTS introduces the world’s first{" "}
              <span className="font-medium">personal autonomy layer</span>.
            </p>

            <p className="text-base text-muted-foreground">
              A local-first operating system for human–AI workflows.
            </p>

            <p className="text-base text-muted-foreground">
              It occupies the space where human thinking and computing have never quite aligned; For those who seek to sustain continuity in their thinking.
            </p>
          </motion.section>

          {/* Framing */}
          <motion.section
            variants={itemVariants}
            className="space-y-6 max-w-3xl"
          >
            <p className="text-lg font-medium text-foreground">
              Think of CTS as a cognitive exoskeleton.
            </p>

            <p className="text-base text-muted-foreground">
              It remembers, organizes, and connects scattered activity—transforming it into structured, actionable knowledge, entirely on your device and under your control.
            </p>

            <p className="text-base text-muted-foreground">
              Rather than reactive assistants, CTS provides
              infrastructure for{" "}
              <span className="font-medium">autonomous digital work</span>:
              persistent memory, context-rich reasoning, reproducible workflows, clear provenance,
              and secure local agents.
            </p>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="max-w-3xl pt-8 space-y-2 border-t border-foreground/10"
          >
            <p className="text-2xl font-semibold leading-snug">
              This is the missing layer of personal computing.
            </p>

            <p className="text-sm opacity-60">
              CTS is building it first.
            </p>
          </motion.section>

          {/* Supplementary */}
          <motion.section variants={itemVariants}>
            <details className="mt-20">
              <summary className="cursor-pointer text-sm font-mono opacity-50 hover:opacity-70">
                // Supplementary access notes
              </summary>

              <div className="pt-10">
                <CTASection variants={itemVariants} />
              </div>
            </details>
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
}
