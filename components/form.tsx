"use client";

import React, { useState } from "react";
import { Button, Input, Checkbox, Form } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function FormLogin() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimer, setBlockTimer] = useState(60); // segundos

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isBlocked) return;

    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= 3) {
        setIsBlocked(true);
        setLoginAttempts(0); // reseta o contador
        setBlockTimer(60); // começa o timer de 60s

        // inicia a contagem regressiva
        const interval = setInterval(() => {
          setBlockTimer((prev) => {
            if (prev === 1) {
              clearInterval(interval);
              setIsBlocked(false);
              return 60;
            }
            return prev - 1;
          });
        }, 1000);
      }

      alert("Email ou senha inválidos.");
    } else {
      // resetar estado ao logar com sucesso
      setLoginAttempts(0);
      setIsBlocked(false);
      router.push("/auth/admin");
    }
  };

  return (
    <div
      className="font-inter flex h-full w-full items-center justify-center"
    >
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          Log In
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </p>

        {errorMsg && (
          <div className="text-red-500 text-sm font-medium">{errorMsg}</div>
        )}

        <Form
          className="flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Digite seu email"
            type="email"
            variant="faded"
            autoComplete="email"
          />
          <Input
            isRequired
            endContent={
              <button
                type="button"
                onClick={toggleVisibility}
                aria-label="Mostrar senha"
              >
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon={
                    isVisible ? "solar:eye-closed-linear" : "solar:eye-bold"
                  }
                />
              </button>
            }
            label="Senha"
            labelPlacement="outside"
            name="password"
            placeholder="Digite sua senha"
            type={isVisible ? "text" : "password"}
            variant="faded"
            autoComplete="current-password"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox
              isSelected={rememberMe}
              onValueChange={setRememberMe}
              size="sm"
              name="remember"
            >
              Lembrar de mim
            </Checkbox>
          </div>
          <Button
            className="w-full"
            color="primary"
            isLoading={loading}
            type="submit"
            disabled={loading}
          >
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
}
