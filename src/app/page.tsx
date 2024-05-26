import Link from "../components/Link";
import Title from "../components/TItle";
import RootLayout from "./layout";

export default function HomePage() {
  return (
    <RootLayout>
      <Title>Alura Cases - Home</Title>
      <Link href="/faq">Ir para o FAQ</Link>
    </RootLayout>
  );
}
