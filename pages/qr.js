export default function Qr() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="text-center basis-1/4">
        <a className="btn" href="https://tberghuis.dev">
          tberghuis.dev
        </a>
      </div>
      {/* https://qrd.by/qr-code-generator-svg */}
      <div className="basis-3/4">
        <img
          className="mx-auto"
          src="/qr-tberghuis-dev.svg"
          alt="tberghuis.dev QR code"
        />
      </div>
    </div>
  );
}
