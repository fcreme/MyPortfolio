import React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "../../lib/utils";

/**
 * A link that reveals a screenshot on hover, tilting slightly toward the
 * cursor. `url` may be omitted for a project with no live site — the preview
 * still opens, the trigger just doesn't navigate.
 */
export const LinkPreview = ({
  children,
  url,
  imageSrc,
  className,
  width = 200,
  height = 125,
  disabled = false,
}) => {
  const [isOpen, setOpen] = React.useState(false);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  return (
    <>
      {/* Warm the cache so the card isn't empty on first hover. */}
      <div className="hidden">
        <img src={imageSrc} width={width} height={height} alt="" />
      </div>
      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          if (!disabled) setOpen(open);
        }}>
        <HoverCardPrimitive.Trigger
          onMouseMove={disabled ? undefined : handleMouseMove}
          className={cn("text-black dark:text-white", disabled ? "" : className)}
          href={disabled ? undefined : url}
          style={disabled ? { pointerEvents: 'none' } : undefined}>
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}>
                <div
                  className="block p-1 bg-gray-900 border-2 border-cyan-500/50 shadow rounded-xl hover:border-cyan-400"
                  style={{ fontSize: 0 }}>
                  {/* object-cover: the screenshots are ~2:1, the card is 1.6:1. */}
                  <img
                    src={imageSrc}
                    width={width}
                    height={height}
                    className="rounded-lg object-cover"
                    alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
