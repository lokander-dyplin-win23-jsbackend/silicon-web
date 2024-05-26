"use server";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://accountprovider-silicons.azurewebsites.net/api/UserInfo?code=lwxoF_e1BNW2hcq-5afvCsZS9gzTDGI7Wpc0JntYTZs8AzFuO_EcQg%3D%3D",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
      res.status(500).json({ error: "Failed to fetch user info" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
