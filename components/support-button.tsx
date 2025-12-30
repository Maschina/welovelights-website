'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'motion/react';
import { BookOpenTextIcon, BugIcon, ChatCircleIcon, ClockCounterClockwiseIcon, EnvelopeSimpleIcon, HandHeartIcon, LightbulbFilamentIcon, QuestionIcon } from "@phosphor-icons/react";
import { Separator } from "./ui/separator";
import useClickOutside from "@/hooks/useClickOutside";
import { GlobeLock } from "lucide-react";

export default function SupportButton() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null!);
    
    useClickOutside(containerRef, () => setIsOpen(false));
    
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className={`fixed z-50 bottom-[21px] right-[21px] bg-white backdrop-blur-md shadow-[0px_4px_4px_#00000040] ${isOpen ? '' : 'cursor-pointer'} overflow-hidden`}
            initial={false}
            animate={{
                width: isOpen ? '14rem' : '120px',
                height: isOpen ? 'auto' : '36px',
                borderRadius: '1.5rem',
            }}
            transition={{
                type: 'spring',
                bounce: 0.1,
                duration: 0.3,
            }}
            onClick={() => !isOpen && setIsOpen(true)}
        >
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="trigger"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-row justify-center gap-2 items-center h-9 tracking-tighter text-black"
                    >
                        <HandHeartIcon size={24} weight="fill" />
                        <span className="font-medium">Support</span>
                    </motion.div>
                ) : (
                    <motion.nav
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0 }}
                            className="flex flex-col gap-2 tracking-tight p-5 text-xs"
                        onClick={(e) => e.stopPropagation()}
                    >
                            {/* <Button variant="ghost" className="w-full rounded-3xl gap-3 justify-start  hover:bg-primary/40 cursor-pointer">
                            <ChatCircleIcon />
                            <span>Chat</span>
                        </Button> */}

                            <Button variant="ghost" className="w-full rounded-3xl gap-3 justify-start hover:bg-primary/40 cursor-pointer" onClick={() => window.location.href = 'mailto:hello@welovelights.app'}>
                            <EnvelopeSimpleIcon />
                            <span>E-Mail</span>
                        </Button>

                        <div className="mx-3">
                            <Separator className="my-1" />
                        </div>

                            <Button 
                                variant="ghost" 
                                className="w-full rounded-3xl gap-3 justify-start hover:bg-primary/40 cursor-pointer"
                                onClick={() => window.location.href = 'https://feedback.welovelights.app/board/bugs/'}
                            >
                            <BugIcon />
                            <span>File a Bug</span>
                        </Button>
                        
                            <Button variant="ghost" className="w-full rounded-3xl gap-3 justify-start hover:bg-primary/40 cursor-pointer" onClick={() => window.location.href = 'https://feedback.welovelights.app/board/features/'}>
                            <LightbulbFilamentIcon />
                            <span>Request a Feature</span>
                        </Button>

                        <div className="mx-3">
                            <Separator className="my-1" />
                        </div>

                            <Button variant="ghost" className="w-full rounded-3xl gap-3 justify-start hover:bg-primary/40 cursor-pointer">
                            <BookOpenTextIcon />
                            <span>Documentation</span>
                        </Button>

                            <Button variant="ghost" className="w-full rounded-3xl gap-3 justify-start hover:bg-primary/40 cursor-pointer">
                            <QuestionIcon />
                            <span>FAQ</span>
                        </Button>

                            <Button variant="ghost" className="w-full rounded-3xl gap-3 justify-start hover:bg-primary/40 cursor-pointer">
                            <ClockCounterClockwiseIcon />
                            <span>Version History</span>
                            </Button>
                            
                            <div className="mx-3">
                                <Separator className="my-1" />
                            </div>

                            <Button variant="ghost" className="w-full rounded-3xl gap-3 justify-start hover:bg-primary/40 cursor-pointer">
                                <GlobeLock strokeWidth={1.5} />
                                <span>Privacy Policy</span>
                            </Button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

