
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-20 right-20 hidden md:inline-block md:absolute ">
            <Image src="/avatar-pc.png" width="320" height="320" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}
