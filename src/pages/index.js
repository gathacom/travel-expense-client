import Image from "next/image";
import { Inter } from "next/font/google";
import FormLogin from "@/components/Fragments/FormLogin";
import AuthLayout from "@/components/Layouts/AuthLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AuthLayout type="signin">
        <FormLogin/>
      </AuthLayout>
    </>
  );
}
