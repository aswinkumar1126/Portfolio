import Image from "next/image";
import { PROFILE_IMAGE, SITE } from "../constants/site";

// size is the width in px at sm and up, below that it stays smaller so it fits phones
const SIZES = {
  sm: "w-24 sm:w-32",
  md: "w-32 sm:w-48",
  lg: "w-48 sm:w-72",
} as const;

type Props = {
  size?: keyof typeof SIZES;
  priority?: boolean;
};

export default function ProfileImage({ size = "md", priority = false }: Props) {
  return (
    <Image
      src={PROFILE_IMAGE}
      alt={`Photo of ${SITE.name}`}
      priority={priority}
      sizes="(min-width: 640px) 288px, 192px"
      className={`${SIZES[size]} aspect-square shrink-0 rounded-3xl border border-border object-cover shadow-sm`}
    />
  );
}
