/**
 * Stub usado por Vitest para resolver los `import()` de Module Federation,
 * que el plugin no puede resolver fuera de un bundle de Vite.
 */
const FederatedRemoteFixture = () => (
  <section data-testid="federated-remote-fixture">
    <h1>Remote simulado</h1>
    <p>Este dominio no forma parte del entorno local actual.</p>
  </section>
);

export default FederatedRemoteFixture;
