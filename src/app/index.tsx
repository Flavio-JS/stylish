import ForgotPasswordPageComponent from "@/components/Pages/ForgotPasswordPage/ForgotPasswordPage";
import SignInPageComponent from "@/components/Pages/SignInPage/SignInPage";

export default function InitialPage() {
  const usuarioEstaAutenticado = false;

  return usuarioEstaAutenticado ? (
    <ForgotPasswordPageComponent />
  ) : (
    <SignInPageComponent />
  );
}
