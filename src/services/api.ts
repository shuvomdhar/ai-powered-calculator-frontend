const API_BASE = "https://ai-powered-calculator-backend.onrender.com"; 

export async function calculate(input: number) {
  const response = await fetch(`${API_BASE}/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  });
  return response.json();
}
