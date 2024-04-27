import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Cargando...</p>
  }

  if (session) {
    // Accede a session.user.name para obtener el nombre del usuario
    return (
      <div>
        <span className="mr-4 text-gray-800">{session.user?.email}</span>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200 ease-in-out"
        >
          Desloguearse
        </button>
      </div>
    );;
  } else {
    // Botón para loguearse con Google
    return (
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        Loguearse con Google
      </button>
    );
  }
}
