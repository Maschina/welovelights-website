"use client"

import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

/**
 * Props for the WarpDialog component
 */
export interface WarpDialogProps {
  /** Whether the dialog is open */
  open?: boolean
  /** Callback function called when the dialog's open state changes */
  onOpenChange?: (open: boolean) => void
}

type WarpDialogContextType = {
  open: boolean
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void
}

const WarpDialogContext = React.createContext<WarpDialogContextType | null>(
  null,
)

export function useWarpDialogContext() {
  const ctx = React.useContext(WarpDialogContext)
  if (!ctx)
    throw new Error("WarpDialog components must be used inside <WarpDialog>")
  return ctx
}

export function WarpDialog({
  open: openProp,
  onOpenChange: setOpenProp,
  ...props
}: React.ComponentProps<"div"> & WarpDialogProps) {
  const [_open, _setOpen] = React.useState(false)
  const open = openProp ?? _open

  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }
    },
    [setOpenProp, open],
  )

  const contextValue = React.useMemo<WarpDialogContextType>(
    () => ({ open, setOpen }),
    [open, setOpen],
  )

  return (
    <WarpDialogContext.Provider value={contextValue}>
      <div data-slot="dialog" {...props} />
    </WarpDialogContext.Provider>
  )
}

export function WarpDialogTrigger({
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  const { setOpen } = useWarpDialogContext()

  return (
    <Comp
      onClick={() => setOpen((prev) => !prev)}
      data-slot="dialog-trigger"
      {...props}
    />
  )
}

function WarpDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-1000 bg-black/50 backdrop-blur-md",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.59, 0, 0.35, 1] }}
      {...props}
    >
      <WarpAnimations />
    </motion.div>
  )
}

export function WarpDialogContent({
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const { open, setOpen } = useWarpDialogContext()

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, setOpen])

  return (
    <AnimatePresence>
      {open && (
        <>
          <WarpDialogOverlay />

          <motion.div
            onClick={() => setOpen((prev) => !prev)}
            className="fixed inset-0 z-1000 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.59, 0, 0.35, 1] }}
            {...props}
          >
            <motion.div
              className="relative flex flex-col items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
              initial={{
                rotateX: -5,
                skewY: -1.5,
                scaleY: 2,
                scaleX: 0.4,
                y: 100,
              }}
              animate={{
                rotateX: 0,
                skewY: 0,
                scaleY: 1,
                scaleX: 1,
                y: 0,
                transition: {
                  duration: 0.35,
                  ease: [0.59, 0, 0.35, 1],
                  y: { type: "spring", visualDuration: 0.7, bounce: 0.2 },
                },
              }}
              exit={{
                rotateX: -5,
                skewY: -1.5,
                scaleY: 2,
                scaleX: 0.4,
                y: 100,
              }}
              transition={{ duration: 0.35, ease: [0.59, 0, 0.35, 1] }}
              style={{
                transformPerspective: 1000,
                originX: 0.5,
                originY: 0,
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function WarpAnimations() {
  const enterDuration = 0.5
  const exitDuration = 0.25
  return (
    <>
      <motion.div
        className="absolute top-full left-[25%] h-1/2 w-1/2 origin-center rounded-full blur-lg will-change-transform"
        initial={{
          scale: 0,
          opacity: 1,
        }}
        animate={{
          scale: 10,
          opacity: 0.2,
          transition: {
            duration: enterDuration,
            opacity: { duration: enterDuration, ease: "easeInOut" },
          },
        }}
        exit={{
          scale: 0,
          opacity: 1,
          transition: { duration: exitDuration },
        }}
      />
      <motion.div
        className="absolute top-[-25%] left-[-50%] h-full w-full rounded-full bg-tertiary-darker blur-[100px] will-change-[opacity]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 0.9,
          scale: 1,
          transition: {
            duration: enterDuration,
            ease: "easeInOut",
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.85,
          transition: { duration: exitDuration },
        }}
      />
      <motion.div
        className="absolute top-[25%] left-[50%] h-full w-full rounded-full bg-tertiary-darkest blur-[100px] will-change-[opacity]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 0.9,
          scale: 1,
          transition: {
            duration: enterDuration,
            ease: "easeInOut",
            delay: 0.1,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.85,
          transition: { duration: exitDuration },
        }}
      />
    </>
  )
}
