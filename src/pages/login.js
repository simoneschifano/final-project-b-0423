import LoginForm from "@/components/login_Form";
import Head from "next/head";



export default function login() {
  return (
    <>
      <Head>
        <title>Crypie - Cripto Wallet Accedi</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Crypie
        </h1>
        <LoginForm />
      </main>
    </>
  );
}