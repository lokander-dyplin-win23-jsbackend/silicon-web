"use server";

import { strict } from "assert";
import { cookies } from "next/headers";

type ActionTypes = {
  success: boolean;
  error?: string | undefined;
};

export default async function signInAction(
  currentState: any,
  formData: FormData
): Promise<ActionTypes> {
  const email = formData.get("email");
  const password = formData.get("password");
  const isPersistent = formData.get("isPersistent") === "true";

  const signInFormData = {
    email,
    password,
    isPersistent,
  };

  try {
    const res = await fetch(
      "https://accountprovider-silicons.azurewebsites.net/api/SignIn?code=kMy2--RiO3urtXGuP7nzRuTSHuBR0_yY_V-AjqCVGE8fAzFu9Gk49g==",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signInFormData),
      }
    );

    const rawResponse = await res.text(); // Get raw response text

    if (res.ok) {
      try {
        const result = JSON.parse(rawResponse); // Parse JSON from the raw response

        // Check if the token is present
        if (result.token) {
          cookies().set("Authorization", result.token, {
            secure: true,
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // Fix expires
            path: "/",
            sameSite: "strict",
          });
          return { success: true };
        } else {
          return { success: false, error: "No token received" };
        }
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError);
        console.error("Raw response:", rawResponse); // Log the raw response for debugging
        return { success: false, error: "Invalid JSON response from server" };
      }
    } else {
      try {
        const result = JSON.parse(rawResponse); // Attempt to parse error response
        return { success: false, error: result.error || "Unknown error" };
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError);
        console.error("Raw response:", rawResponse); // Log the raw response for debugging
        return { success: false, error: "Invalid JSON response from server" };
      }
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    return {
      success: false,
      error: "Unable to sign in right now, please try again later",
    };
  }
}
