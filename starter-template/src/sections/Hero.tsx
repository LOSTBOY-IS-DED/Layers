"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope , rightDesignAnimate] = useAnimate(); 
    const [rightPointerScope , rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5 ,delay : 1.5 }],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <section className="py-24 overflow-x-clip" style={{
            cursor : `url(${cursorYouImage.src}) , auto`,
        }}>
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    ref={leftDesignScope}
                    className="absolute -left-32 top-16 hidden lg:block"
                    drag
                >
                    <Image
                        src={designExample1Image}
                        alt="design example 1 image"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    ref={leftPointerScope}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Neha" />
                </motion.div>
                <motion.div drag initial={{ opacity: 0, y: 100, x: 100 }} ref={rightDesignScope} className="absolute -right-64 -top-16 hidden lg:block">
                    <Image
                        src={designExample2Image}
                        alt="design example 2 image"
                        draggable = "false"
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100, x: 275 }} ref={rightPointerScope} className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Subh" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $10.5M seed round raised{" "}
                    </div>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
            </div>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto ">
                <input
                    type="email"
                    placeholder="Enter you email "
                    className="bg-transparent px-4 flex-1 w-full"
                />
                <Button
                    variant="primary"
                    type="submit"
                    className="whitespace-nowrap"
                    size="sm"
                >
                    Sign Up{" "}
                </Button>
            </form>
        </section>
    );
}
