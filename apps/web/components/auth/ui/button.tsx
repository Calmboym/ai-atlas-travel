"use client";

import { forwardRef } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import clsx from "clsx";
import { DURATION, PRESS_SCALE } from "@/lib/tokens/motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

/**
 * Button Contract (DESIGN_TOKENS.md Part 6, primary variant):
 * background color-primary · text color-on-primary · radius radius-lg
 * · padding space-6 horizontal / space-3 vertical · shadow shadow-sm ·
 * hover color-primary-hover · pressed color-primary-active · focus
 * focus-ring-primary · motion duration-normal ease-out · min height
 * 48px · min width 44px.
 *
 * Press feedback (scale 98%, no bounce) and hover elevation follow
 * 21_PREMIUM_MICROINTERACTIONS.md "Button Interactions". Loading state
 * follows COMPONENT_INVENTORY.md's LoadingButton pattern: spinner +
 * aria-busy, label kept in the DOM for screen readers.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, disabled, type = "submit", ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const isDisabled = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading || undefined}
        whileTap={prefersReducedMotion || isDisabled ? undefined : { scale: PRESS_SCALE }}
        whileHover={
          prefersReducedMotion || isDisabled ? undefined : { y: -1 }
        }
        transition={{ duration: DURATION.fast }}
        className={clsx(
          "inline-flex min-h-[48px] min-w-[44px] items-center justify-center gap-2",
          "rounded-lg bg-primary px-6 py-3 text-base font-semibold text-on-primary shadow-sm",
          "transition-colors duration-200 ease-out hover:bg-primary-hover active:bg-primary-active",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : null}
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";
