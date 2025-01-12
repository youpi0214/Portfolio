import { ref } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");

function setTheme(newTheme: "light" | "dark") {
    theme.value = newTheme;
    const html = document.documentElement;

    if (newTheme === "dark") {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}

function toggleTheme() {
    setTheme(theme.value === "light" ? "dark" : "light");
}

export function useTheme() {
    if (!localStorage.getItem("theme")) {
        setTheme(theme.value);
    }
    return { theme, setTheme, toggleTheme };
}
