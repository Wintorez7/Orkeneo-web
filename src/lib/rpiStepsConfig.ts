type StepKey = 1 | 2 | 3 | 4;

export const stepConfig: Record<
  StepKey,
  {
    step: string;
    title: string;
    subtitle: string;
    badge?: string | null;
    showTime?: boolean;
  }
> = {
  1: {
    step: "STEP 1 OF 4",
    title: "Let’s calculate how much you’re losing every month",
    subtitle:
      "Answer a few quick questions — we’ll estimate your monthly profit loss and improvement potential",
    badge:
      "Used by modern kitchens to identify ₹30K–₹50K monthly leaks",
    showTime: true,
  },

  2: {
    step: "STEP 2 OF 4 — ALMOST DONE",
    title: "Let’s estimate how much profit you’re losing",
    subtitle:
      "Use your monthly revenue — we’ll calculate hidden losses in real-time",
    badge: null,
    showTime: false,
  },

  3: {
    step: "STEP 3 OF 4 — ALMOST THERE",
    title: "Let’s break down where your profit is leaking",
    subtitle:
      "Adjust your operations — we’ll show impact instantly",
    badge: null,
    showTime: false,
  },

  4: {
    step: "STEP 4 OF 4 — ALMOST THERE",
    title: "Analyzing your profit leakage...",
    subtitle:
      "Using your data to identify hidden losses and recovery opportunities",
    badge:
      "Based on your ₹15L monthly revenue, we’re estimating your loss patterns...",
    showTime: true,
  },
};