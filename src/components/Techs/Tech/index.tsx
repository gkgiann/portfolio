import { TechContainer } from "./styles";

interface TechProps {
  title: string;
  src: string;
}

export function Tech({ src, title }: TechProps) {
  return (
    <TechContainer data-aos="flip-up">
      <img alt={title} src={src} />
      <strong>{title}</strong>
    </TechContainer>
  );
}
