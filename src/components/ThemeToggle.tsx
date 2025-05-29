
import * as React from "react";

export default function ThemeToggle() {
  React.useEffect(() => {
    // Lock to dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  }, []);

  // Return null to hide the toggle completely
  return null;
}
