import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-20 hidden md:inline-block md:absolute">
            <Image src="/avatar-libreta.png" width="200" height="200" className="w-[300px] h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServices;