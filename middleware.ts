import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = cookies().get("Authorization");

  try {
    const res = await fetch(
      "https://tokenprovider-silicons.azurewebsites.net/api/Validate?code=qtJGrtkaXm7TXPtPxJSJk5SsXWok7ULRSOyh1umUWjdGAzFuMJfdTg%3D%3D",
      {
        method: "post",
        headers: {
          Authorization: `bearer ${cookie?.value}`,
        },
      }
    );
    if (res.status === 200) NextResponse.redirect(request.url);
    else return NextResponse.redirect(new URL("/signin", request.url));
  } catch (error) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/account", "/courses"],
};
