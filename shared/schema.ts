import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orders = pgTable("orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  customerPhone: text("customer_phone"),
  products: text("products").notNull(), // JSON string of products
  total: integer("total").notNull(), // Amount in cents
  includeInstallation: boolean("include_installation").default(false),
  status: text("status").default("pending"), // pending, confirmed, shipped, delivered
  createdAt: timestamp("created_at").defaultNow(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const insertOrderSchema = createInsertSchema(orders).pick({
  customerName: true,
  customerEmail: true,
  customerPhone: true,
  products: true,
  total: true,
  includeInstallation: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type User = typeof users.$inferSelect;
export type Order = typeof orders.$inferSelect;
export type Contact = typeof contacts.$inferSelect;