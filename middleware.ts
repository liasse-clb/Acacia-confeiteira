import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Rota protegida apenas para usuários logados
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/auth/admin')

  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return res
}
