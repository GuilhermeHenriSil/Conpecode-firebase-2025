"use client";
import { useState } from "react";
import { auth } from "@/firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /*
  -------------------------------------------------------------------------
    Faça um sistema de cadastro com o firebaseAuth
    Olhe as importações que não estão sendo usadas ainda
  -------------------------------------------------------------------------
  */

  const createAccount = async () => {
    
  }



  return (
  
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <button
        className="absolute top-6 right-8 cursor-pointer"
        title="Documentação"
        onClick={() => {
          window.open("https://firebase.google.com/docs/auth/web/password-auth?hl=pt-BR&authuser=1", "_blank");
        }}
      >
        <img src="/information-button.png" alt="Imagem" className="w-[40px] h-[40px]"/> 
      </button>
      {signupCard()}

      <button
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 mt-2.5 rounded hover:shadow-xl transition-all duration-300"
        onClick={() => {
          createAccount();
        }}
      >
        Cadastrar
      </button>

    </main>
    
  );

  function signupCard(){
    return (
      <div className="h-1/3 w-1/2 flex flex-col items-start justify-start bg-conpec-white border rounded-3xl px-[7%] py-[3%] gap-2 ">
        <div className="text-2xl font-bold mb-2.5">
          Crie uma conta
        </div>
        <div className="w-[100%]">
          <div className="font-bold text-[16px]">E-mail:   
            <span className="font-normal">
              <input className="border border-gray-300 rounded-md px-3 py-0.5 ml-1 w-[70%]"
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
          </div>
        </div>

        <div className="w-[100%]">
          <div className="font-bold text-[16px]">Senha:   
            <span className="font-normal">
              <input className="border border-gray-300 rounded-md px-3 py-0.5 ml-1 w-[70%]"
                placeholder="senha"
                autoComplete="current-password"
                inputMode="text"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </div>
        </div>
        
      </div>
    );

  }
}
