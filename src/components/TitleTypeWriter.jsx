import Typewriter from "typewriter-effect";

const TitleTypeWriter = () => {
  return (
    <div>
      <h1 className="fw-bold text-center">Bienvenido a mi tienda online 🛍️</h1>
      <div className="text-center">
        <h3>
          <Typewriter
            options={{
              strings: ["👋 Hola, soy Urian Viera", "Full Stack Developer 🔥"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50, // Velocidad de eliminación
              delay: 75, // Velocidad de escritura
            }}
          />
        </h3>
      </div>
    </div>
  );
};

export default TitleTypeWriter;
