import express from "express";

const app = express();
const jsonBodyConfig = express.json();

export { app, jsonBodyConfig };
