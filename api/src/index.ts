import app from "./app";

const PORT = Number(process.env.PORT) || 3006;

app.listen({ port: PORT });

console.log(`🚀  Fastify server running on port ${PORT}`);
console.log(`Route index: /`);
console.log(`Route user: /api/v1/user`);