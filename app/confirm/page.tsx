import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Confirm() {
  const router = useRouter();
  const email = useSearchParams().get("email");
  const [error, setError] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      let form = { email, code };
      const res = await fetch("", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.status === 200) {
        router.push("/signin");
      } else {
        let result = await res.json();
        setError(result.error);
      }
    } catch {
      setError("Something went wrong, please try again later.");
    }
  };
  return (
    <div onSubmit={handleSubmit} className="confirm">
      <div className="container">
        {error && <div className="alrt alert-danger">{error} </div>}

        <form noValidate>
          <p>
            Havent got an verification code?{" "}
            <link href="/resend">Resend here</link>
          </p>
          <div className="form-content">
            <div id="form-code" className="input-group">
              <label>Verification code</label>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                name="code"
                placeholder="Enter your verification code"
              />
              <div id="form-button">
                <button type="submit" className="btn btn-theme">
                  <i className="fa-regular fa-check-double"></i>Verify code
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
