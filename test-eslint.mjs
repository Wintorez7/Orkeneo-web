import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

try {
  const configs = compat.extends("next/core-web-vitals", "next/typescript");
  console.log("Success! configs length:", configs.length);
} catch (e) {
  console.log("Error caught!");
  console.log(e.message);
  if (e.message.includes("Converting circular structure to JSON")) {
      console.log("It's the JSON stringify crash. We can't see the real error.");
  }
}
